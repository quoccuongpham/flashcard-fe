import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { SendSharp } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";

const NavItem = ({ text, active, icon }) => {
    return (
        <>
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
        </>
    );
};

export default NavItem;
