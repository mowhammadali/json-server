import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../../pages/home/Home';

const ProtectedRoute = ({authenticated}) => {
    return authenticated ? <Home /> : <Navigate to={'/login'}/>
}

export default ProtectedRoute;