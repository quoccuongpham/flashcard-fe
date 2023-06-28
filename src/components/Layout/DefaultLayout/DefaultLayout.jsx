import { Container, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Header from "./Header";
import SideBar from "./SideBar";
import NavContextProvider from "../../../context/NavContext";

function DefaultLayout({ children }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <NavContextProvider>
            <Container maxWidth={false} disableGutters={true}>
                <Header />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={5}
                    sx={{ paddingRight: matches ? "20px" : "0px" }}
                >
                    {matches ? (
                        <Container
                            maxWidth={false}
                            // disableGutters={true}
                            sx={{ width: "250px" }}
                        >
                            <SideBar />
                        </Container>
                    ) : null}
                    <Container
                        maxWidth={false}
                        disableGutters={true}
                        sx={{
                            backgroundColor: "#eef2f6",
                            borderRadius: "20px",
                        }}
                    >
                        {children}
                    </Container>
                </Stack>
            </Container>
        </NavContextProvider>
    );
}

export default DefaultLayout;
