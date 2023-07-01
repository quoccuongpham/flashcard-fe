import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { useContext } from "react";
import LinkStyled from "../../../../styledComponent/LinkStyled";
import { deepPurple } from "@mui/material/colors";
import { NavContext } from "../../../../context/NavContext";
const NavItem = ({ text, active, icon, id, path }) => {
    const { navState, changeNav } = useContext(NavContext);
    const handleClick = (id) => {
        changeNav(id);
        console.log(navState);
    };
    return (
        <>
            <LinkStyled to={path}>
                <ListItemButton
                    sx={{
                        backgroundColor: active ? deepPurple[50] : "inherit",
                        color: active ? deepPurple[500] : "inherit",
                        borderRadius: "10px",
                        paddingX: "20px",
                        marginY: 1,
                        "&:hover": {
                            backgroundColor: deepPurple[50],
                            color: deepPurple[500],
                        },
                    }}
                    onClick={() => {
                        handleClick(id);
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            marginRight: 2,
                            color: active ? deepPurple[500] : "inherit",
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                            fontWeight: 600,
                        }}
                    />
                </ListItemButton>
            </LinkStyled>
        </>
    );
};

export default NavItem;
