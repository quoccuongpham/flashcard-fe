import { Container, List, ListSubheader } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NavItem from "./NavItem";
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
