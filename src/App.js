import React, { useContext } from "react";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./auth/protected-route/ProtectedRoute";
import { ContextAuthProvider } from "./context/context-auth/ContextAuth";

const App = () => {
    const {authenticated} = useContext(ContextAuthProvider);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute authenticated={authenticated}/>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
