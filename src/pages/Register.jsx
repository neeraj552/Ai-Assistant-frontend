import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../auth/AuthLayout";
import AuthCard from "../auth/AuthCard";
import AuthHeader from "../auth/AuthHeader";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";
import toast from "react-hot-toast";

function Register(){
    
    const [name, setName]   = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function handleRegister() {
        const registerRequest = {
            name,
            email,
            password,
        };

        try{
            await register(registerRequest);

            toast.success("Account created successfully");

            navigate("/login");
        } catch (error) {
            console.error(error);
            toast.error("registration failed");
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
               title="Create Account"
               subtitle="Start chatting with your document using AI."
               />
                <motion.div 
                variants={fadeUp}
                className="mb-4">
                    <Input
                    placeholder="Enter your name"
                    value={name}
                   onChange={(event) => setName(event.target.value)}
                    />

                </motion.div>
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
                </motion.div>

                <motion.div
                variants={fadeUp}
                className="mt-6"
                >
                <Button className=" w-full"
                 onClick={handleRegister}
                >
                    Register
                </Button>
                </motion.div>

             </motion.div>
            </AuthCard>
        </AuthLayout>
    );
}

export default Register;