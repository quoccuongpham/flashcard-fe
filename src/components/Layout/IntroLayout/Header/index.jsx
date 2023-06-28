import { Box, Container } from "@mui/material";
import Logo from "../../Logo";

const Header = () => {
    return (
        <Container maxWidth={false}>
            <Box>
                <Logo />
            </Box>
        </Container>
    );
};

export default Header;
