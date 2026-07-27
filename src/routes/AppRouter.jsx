import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Chat from "../pages/Chat";

function AppRouter(){
    return (
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/files"    element={<Files/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/chat/:documentId" element={<Chat/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;