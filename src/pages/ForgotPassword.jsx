import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../auth/AuthLayout";
import AuthCard from "../auth/AuthCard";
import AuthHeader from "../auth/AuthHeader";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { fadeUp, staggerContainer } from "../animations/variants";
import { forgotPassword } from "../services/authService";

function ForgotPassword() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);

    const [emailSent, setEmailSent] = useState(false);

    async function handleSubmit() {

        if (!email.trim()) {
            toast.error("Email is required.");
            return;
        }

        try {

            setLoading(true);

            await forgotPassword({
                email,
            });

            setEmailSent(true);

        } catch (error) {

            console.error(error);

            toast.error("Something went wrong.");

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

                    {!emailSent ? (

                        <>

                            <AuthHeader
                                title="Forgot Password"
                                subtitle="Enter your email and we'll send you a password reset link."
                            />

                            <motion.div
                                variants={fadeUp}
                                className="mb-6"
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
                            >

                                <Button
                                    className="w-full"
                                    loading={loading}
                                    loadingText="Sending..."
                                    onClick={handleSubmit}
                                >
                                    Send Reset Link
                                </Button>

                            </motion.div>

                        </>

                    ) : (

                        <motion.div
                            variants={fadeUp}
                            className="text-center"
                        >

                            <div
                                className="
                                    mx-auto
                                    mb-6
                                    flex
                                    h-20
                                    w-20
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-blue-500/10
                                "
                            >

                                <Mail
                                    size={40}
                                    className="text-blue-400"
                                />

                            </div>

                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-white
                                "
                            >
                                Check your email
                            </h2>

                            <p
                                className="
                                    mt-4
                                    text-slate-400
                                "
                            >
                                We've sent a password reset link to
                            </p>

                            <p
                                className="
                                    mt-1
                                    font-medium
                                    text-white
                                "
                            >
                                {email}
                            </p>

                        </motion.div>

                    )}

                    <motion.div
                        variants={fadeUp}
                        className="mt-8 text-center"
                    >

                        <button
                            onClick={() => navigate("/login")}
                            className="
                                text-sm
                                text-blue-400
                                hover:text-blue-300
                            "
                        >
                            ← Back to Login
                        </button>

                    </motion.div>

                </motion.div>

            </AuthCard>

        </AuthLayout>

    );

}

export default ForgotPassword;