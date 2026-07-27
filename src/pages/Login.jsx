import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useState } from "react";
import { login as loginApi } from "../services/authService";
import useAuth from "../hooks/useAuth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();

    async function handleLogin() {
        const loginRequest = {
            email,
            password,
        };

        try {
            const response = await loginApi(loginRequest);

            login(response.token);

            console.log("Login Successful");
            console.log(response);
        } catch (error) {
            console.error("Login Failed");
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-96">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Login
                </h1>

                <div className="mb-4">
                    <Input
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <Button onClick={handleLogin}>
                Login
                </Button>
            </div>
        </div>
    );
}

export default Login;