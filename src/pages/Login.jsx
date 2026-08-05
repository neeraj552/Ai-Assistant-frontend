import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useState } from "react";
import { login as loginApi } from "../services/authService";
import useAuth from "../hooks/useAuth";
import AuthLayout from "../auth/AuthLayout";
import AuthCard from "../auth/AuthCard";
import AuthHeader from "../auth/AuthHeader";
import { fadeUp } from "../animations/variants";
import { motion } from "framer-motion";
import { staggerContainer } from "../animations/variants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PasswordStrength from "../auth/PasswordStrength";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();
    async function handleLogin() {
        const loginRequest = {
            email,
            password,
        };

       try {
        const response = await loginApi(loginRequest);

        login(response.token);

        toast.success("Welcome back!");
        navigate("/dashboard");
       } catch (error) {
        toast.error("Invalid email or password.");
    } finally{
        setLoading(false);
    }
    }

    return (
        <AuthLayout>
            <AuthCard>

            <motion.div
                variants={staggerContainer}
                initial = "hidden"
                animate = "visible"
            >
                <AuthHeader
                title="Login"
                subtitle="Welcome back! Continue chatting with your documents."
                />

                <motion.div 
                variants={fadeUp}
                className="mb-4">

                    <Input
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </motion.div>

                <motion.div 
                variants={fadeUp}
                className="mb-4">
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <PasswordStrength
                       password={password}
                    />
                </motion.div>


                <motion.div
                       variants={fadeUp}
                       className="mb-6 flex justify-end"
                >
                <button
                       onClick={() => navigate("/forgot-password")}
                       className="
                       text-sm
                       text-blue-400
                       transition
                       hover:text-blue-300
                       "
                >
                Forgot Password?
                </button>
                </motion.div>
               
               <motion.div
               variants={fadeUp}
               className="mt-4"
               >
                <Button 
                className="w-full"
                onClick={handleLogin}
                loading={loading}
                loadingText="Logging in..."
                >
                Login
                </Button>
               </motion.div>

               <motion.div
                variants={fadeUp}
                className="mt-6 text-center"
               >
               <p className="text-sm text-slate-400">

                Don't have an account?{" "}

               <button
                  onClick={() => navigate("/register")}
                  className="
                  font-medium
                  text-blue-400
                  hover:text-blue-300
                  "
               >
                 Register
              </button>

              </p>
            </motion.div>
            </motion.div>
            </AuthCard>
        </AuthLayout>
    );
}

export default Login;