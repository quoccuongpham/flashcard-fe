import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { Box, Stack, CircularProgress, Typography } from "@mui/material";
const ProtectedRoutes = () => {
    const { authState } = useContext(AuthContext);
    if (authState.authLoading) {
        return (
            <Box>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    height="100vh"
                >
                    <CircularProgress />
                    <Typography>Đang đăng nhập...</Typography>
                </Stack>
            </Box>
        );
    }
    return authState.isAuthenticated ? <Outlet /> : <Navigate to="/welcome" />;
};

export default ProtectedRoutes;
