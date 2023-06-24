import { Container } from "@mui/material";
import Header from "./Header";

const IntroLayout = ({ children }) => {
    return (
        <Container
            maxWidth={false}
            disableGutters={true}
            // sx={{ backgroundColor: "orange" }}
        >
            <Header></Header>
            {children}
        </Container>
    );
};

export default IntroLayout;
