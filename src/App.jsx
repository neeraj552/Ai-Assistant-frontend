import AppRouter from "./routes/AppRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

function App(){
  return(
    <BrowserRouter>
     <Routes>
          
          {/*Public Routes*/}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/*Protected Routes*/}
          <Route
             path="/dashboard"
             element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
             }
             />

     </Routes>
    
    </BrowserRouter>

  );
}

export default App;