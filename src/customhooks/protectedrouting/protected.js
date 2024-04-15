import React from "react";
import useAuth from '../../customhooks/useauth'; // Corrected import path
import { Navigate } from 'react-router-dom';

const ProtectedRouting = ({ children }) => {
    const { currentuser } = useAuth();

    return currentuser ? children : <Navigate to="login" />;
}

export default ProtectedRouting;