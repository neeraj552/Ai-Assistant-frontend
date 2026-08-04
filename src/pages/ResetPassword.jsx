import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../auth/AuthLayout";
import AuthCard from "../auth/AuthCard";
import AuthHeader from "../auth/AuthHeader";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { fadeUp, staggerContainer } from "../animations/variants";
import { resetPassword } from "../services/authService";

function ResetPassword() {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleResetPassword() {

        if (!password || !confirmPassword) {

            toast.error("Please fill all fields.");

            return;
        }

        if (password !== confirmPassword) {

            toast.error("Passwords do not match.");

            return;
        }

        try {

            setLoading(true);

            await resetPassword({

                token,
                password,

            });

            setSuccess(true);

        } catch (error) {

            console.error(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to reset password."
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

                    {!success ? (

                        <>

                            <AuthHeader
                                title="Reset Password"
                                subtitle="Create a new password for your account."
                            />

                            <motion.div
                                variants={fadeUp}
                                className="mb-4"
                            >

                                <Input
                                    type="password"
                                    placeholder="New Password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
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

                            </motion.div>

                            <motion.div variants={fadeUp}>

                                <Button
                                    className="w-full"
                                    loading={loading}
                                    loadingText="Updating..."
                                    onClick={handleResetPassword}
                                >
                                    Reset Password
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
                                    bg-green-500/10
                                "
                            >

                                <CheckCircle
                                    size={42}
                                    className="text-green-400"
                                />

                            </div>

                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-white
                                "
                            >
                                Password Updated!
                            </h2>

                            <p
                                className="
                                    mt-3
                                    text-slate-400
                                "
                            >
                                Your password has been successfully reset.
                            </p>

                            <Button
                                className="mt-8 w-full"
                                onClick={() => navigate("/login")}
                            >
                                Back to Login
                            </Button>

                        </motion.div>

                    )}

                </motion.div>

            </AuthCard>

        </AuthLayout>

    );

}

export default ResetPassword;