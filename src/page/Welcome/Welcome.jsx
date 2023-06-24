import { Typography, Button, Container, Stack } from "@mui/material";
import { StyledLink } from "../../components/utils/customStyle";
const Welcome = () => {
    return (
        <Container sx={{ minHeight: "calc(100vh - 45px)" }}>
            <Typography variant="h4" sx={{ marginTop: "50px" }}>
                Học nhanh mọi từ vựng bạn muốn.
            </Typography>
            <Stack sx={{ marginTop: "100px" }} direction="row" spacing={3}>
                <Button variant="contained">
                    <StyledLink to="/login">Đăng nhập</StyledLink>
                </Button>
                <Button variant="contained">
                    <StyledLink to="/register">Đăng ký</StyledLink>
                </Button>
            </Stack>
        </Container>
    );
};

export default Welcome;
