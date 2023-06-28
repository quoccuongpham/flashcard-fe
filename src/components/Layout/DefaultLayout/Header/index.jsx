import {
    Box,
    Container,
    Stack,
    Drawer,
    Divider,
    Avatar,
    Chip,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useState, useContext } from "react";

// icons
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";

import Logo from "../../Logo";
import { SearchInput } from "../../../../styledComponent/Search";
import ButtonStyled from "../../../../styledComponent/ButtonStyled";
import Nav from "../SideBar/Nav";
import { NavContext } from "../../../../context/NavContext";

const Header = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const { navState } = useContext(NavContext);

    const [open, setOpen] = useState(false);
    const handleOpen = (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOpen(!open);
    };
    return (
        <Container
            maxWidth={false}
            disableGutters={true}
            sx={{ marginY: "20px" }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Container
                    maxWidth={false}
                    fixed={true}
                    sx={{
                        width: "270px",
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{
                            width: "250px",
                        }}
                    >
                        <Logo />
                        {!matches ? (
                            <ButtonStyled>
                                <DehazeRoundedIcon />
                            </ButtonStyled>
                        ) : null}
                    </Stack>
                </Container>
                {matches ? (
                    <Container sx={{ textAlign: "right" }}>
                        <ButtonStyled onClick={handleOpen}>
                            <DehazeRoundedIcon />
                        </ButtonStyled>
                        <Drawer
                            // variant="temporary"
                            anchor="right"
                            open={open}
                            onClose={handleOpen}
                            transitionDuration={450}
                        >
                            <Box width="40vh">
                                <Nav itemActive={navState.itemActive} />
                            </Box>
                        </Drawer>
                    </Container>
                ) : (
                    <Container
                        sx={{ paddingX: "30px" }}
                        fixed={true}
                        maxWidth={false}
                        disableGutters={true}
                    >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box sx={{ width: "300px" }}>
                                <SearchInput
                                    placeholder="Từ điển"
                                    size="normal"
                                    fullWidth={true}
                                />
                            </Box>
                            <Box>
                                <Stack>
                                    <Chip
                                        // label={<SettingsIcon />}
                                        label="avatar"
                                        // icon={<SettingsIcon />}
                                        size="medium"
                                        avatar={
                                            <Avatar
                                                sx={{
                                                    width: 50,
                                                    height: 50,
                                                }}
                                            />
                                        }
                                        sx={{
                                            width: "92px",
                                            height: "48px",
                                        }}
                                    />
                                </Stack>
                            </Box>
                        </Stack>
                    </Container>
                )}
            </Stack>
        </Container>
    );
};

export default Header;
