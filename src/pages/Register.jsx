import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { login, register } from "../services/authService";
import { useNavigate } from "react-router-dom";

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

            alert("Registration Sucessfull")

            navigate("/login");
        } catch (error) {
            console.error(error);
            alert("Registration Failed");
        }
    } 

    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-96">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Register
                </h1>
                <div className="mb-4">
                    <Input
                    placeholder="Enter your name"
                    value={name}
                   onChange={(event) => setName(event.target.value)}
                    />

                </div>
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

                <Button
                    text="Register"
                    onClick={handleRegister}
                />
            </div>
        </div>
    );
}

export default Register;