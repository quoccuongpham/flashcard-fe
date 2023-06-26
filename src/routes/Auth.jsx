import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
    const { authState } = useContext(AuthContext);
    if (authState.authLoading) {
        return <>Loading</>;
    }
    return authState.isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default Auth;
