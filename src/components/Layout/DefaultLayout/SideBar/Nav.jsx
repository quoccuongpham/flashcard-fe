import { List, ListSubheader } from "@mui/material";
// icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import NavItem from "./NavItem";
const Nav = () => {
    return (
        <List
            sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader
                    sx={{ fontWeight: 700 }}
                    component="div"
                    id="nested-list-subheader"
                >
                    Điều hướng
                </ListSubheader>
            }
        >
            <NavItem
                text="Trang chủ"
                active={true}
                icon={<HomeOutlinedIcon />}
            />
            <NavItem
                text="Đọc báo tiếng anh"
                active={false}
                icon={<NewspaperOutlinedIcon />}
            />
            <NavItem
                text="Thống kê"
                active={false}
                icon={<AnalyticsOutlinedIcon />}
            />
            <NavItem
                text="Hướng dẫn"
                active={false}
                icon={<ArticleOutlinedIcon />}
            />
            <NavItem
                text="Cài đặt"
                active={false}
                icon={<SettingsOutlinedIcon />}
            />
        </List>
    );
};

export default Nav;
