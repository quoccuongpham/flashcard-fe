import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const { authState } = useContext(AuthContext);
    if (authState.authLoading) {
        return <>Loading</>;
    }
    return authState.isAuthenticated ? <Outlet /> : <Navigate to="/welcome" />;
};

export default ProtectedRoutes;
