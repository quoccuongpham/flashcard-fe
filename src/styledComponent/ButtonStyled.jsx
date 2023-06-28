import { IconButton } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import styled from "@emotion/styled";

const ButtonStyled = styled(IconButton)({
    borderRadius: "10px",
    backgroundColor: deepPurple[50],
    color: deepPurple[500],
    "&:hover": {
        backgroundColor: deepPurple[500],
        color: "white",
    },
});
// const ButtonStyled = ({ children }) => {
//     return (
//         <IconButton
//             size="normal"
//             sx={{
//                 borderRadius: "10px",
//                 backgroundColor: deepPurple[50],
//                 color: deepPurple[500],
//                 "&:hover": {
//                     backgroundColor: deepPurple[500],
//                     color: "white",
//                 },
//             }}
//         >
//             {children}
//         </IconButton>
//     );
// };

export default ButtonStyled;
