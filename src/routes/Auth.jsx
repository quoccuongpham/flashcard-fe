import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";

const Auth = () => {
    const { authState } = useContext(AuthContext);
    if (authState.authLoading) {
        return (
            <Box>
                <Stack>
                    <CircularProgress />
                    <Typography>Đang đăng nhập...</Typography>
                </Stack>
            </Box>
        );
    }
    return authState.isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default Auth;
