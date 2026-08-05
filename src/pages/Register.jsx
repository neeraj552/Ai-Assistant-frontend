import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import AuthLayout from "../auth/AuthLayout";
import AuthCard from "../auth/AuthCard";
import AuthHeader from "../auth/AuthHeader";
import PasswordStrength from "../auth/PasswordStrength";

import { register } from "../services/authService";
import { fadeUp, staggerContainer } from "../animations/variants";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleRegister() {

        if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            toast.error("Please fill all fields.");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {

            setLoading(true);

            const registerRequest = {
                name,
                email,
                password,
            };

            await register(registerRequest);

            toast.success("Account created successfully!");

            navigate("/login");

        } catch (error) {

            console.error(error);

            toast.error(
                error.response?.data?.message ||
                "Registration failed."
            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <AuthLayout>

            <AuthCard>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >

                    <AuthHeader
                        title="Create Account"
                        subtitle="Start chatting with your documents using AI."
                    />

                    <motion.div
                        variants={fadeUp}
                        className="mb-4"
                    >

                        <Input
                            placeholder="Enter your name"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                        />

                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mb-4"
                    >

                        <Input
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                        />

                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mb-4"
                    >

                        <Input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />

                        <PasswordStrength
                            password={password}
                        />

                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mb-6"
                    >

                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                        />

                        {confirmPassword && (

                            <p
                                className={`mt-2 text-sm font-medium ${
                                    password === confirmPassword
                                        ? "text-green-400"
                                        : "text-red-400"
                                }`}
                            >

                                {password === confirmPassword
                                    ? "✔ Passwords match"
                                    : "✖ Passwords do not match"}

                            </p>

                        )}

                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                    >

                        <Button
                            className="w-full"
                            onClick={handleRegister}
                            loading={loading}
                            loadingText="Creating account..."
                        >
                            Register
                        </Button>

                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mt-6 text-center"
                    >

                        <p className="text-sm text-slate-400">

                            Already have an account?{" "}

                            <button
                                onClick={() => navigate("/login")}
                                className="
                                    font-medium
                                    text-blue-400
                                    transition
                                    hover:text-blue-300
                                "
                            >
                                Login
                            </button>

                        </p>

                    </motion.div>

                </motion.div>

            </AuthCard>

        </AuthLayout>

    );

}

export default Register;