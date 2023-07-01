import { List, ListSubheader } from "@mui/material";
import { useContext } from "react";
// icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import NavItem from "./NavItem";
import { NavContext } from "../../../../context/NavContext";

const Nav = ({ itemActive }) => {
    const { navState, changeNav } = useContext(NavContext);

    const navInfo = [
        {
            text: "Trang chủ",
            icon: HomeOutlinedIcon,
            path: "/",
        },
        {
            text: "Đọc báo tiếng anh",
            icon: NewspaperOutlinedIcon,
            path: "/news",
        },
        {
            text: "Phân tích",
            icon: AnalyticsOutlinedIcon,
            path: "/analysis",
        },
        {
            text: "Hướng dẫn",
            icon: ArticleOutlinedIcon,
            path: "/docs",
        },
        {
            text: "Cài đặt",
            icon: SettingsOutlinedIcon,
            path: "/setting",
        },
    ];

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
            {navInfo.map((navItem, index) => {
                const Icon = navItem.icon;
                const isActive = index === navState.itemActive;
                return (
                    <NavItem
                        text={navItem.text}
                        icon={<Icon />}
                        key={index}
                        active={isActive}
                        id={index}
                        path={navItem.path}
                    />
                );
            })}
            {/* <NavItem text={navInfo[0].text} active={true} icon={<Icon />} />
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
            /> */}
        </List>
    );
};

export default Nav;
