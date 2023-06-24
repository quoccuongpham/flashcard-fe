import { Container, Box } from "@mui/material";

import Header from "./Header";
import SideBar from "./SideBar";

function DefaultLayout({ children }) {
    return (
        <Container>
            <Box>
                <Header />
            </Box>
            <Box>
                <SideBar></SideBar>
                {children}
            </Box>
        </Container>
    );
}

export default DefaultLayout;
