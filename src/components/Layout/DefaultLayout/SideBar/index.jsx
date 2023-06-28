import { Container } from "@mui/material";

import Nav from "./Nav";
const SideBar = () => {
    return (
        <Container
            maxWidth={false}
            disableGutters={true}
            sx={{
                width: "250px",
                backgroundColor: "orange",
                borderRadius: "20px",
            }}
        >
            <Nav />
        </Container>
    );
};

export default SideBar;
