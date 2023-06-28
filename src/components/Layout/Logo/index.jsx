import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";
const MainLogo = styled.span`
    font-family: "Source Code Pro", monospace;
    font-weight: 700;
    font-size: 1.8rem;
    user-select: none;
    &:hover {
        cursor: pointer;
    }
`;
const SpecialCharLogo = styled.span`
    color: #f26a44;
`;
const NomalCharLogo = styled.span`
    // color: white;
`;
const Logo = () => {
    return (
        <MainLogo
            onClick={() => {
                // const navigate = useNavigate();
                console.log("Navigate");
                // navigate("/");
                // return <Navigate path="/" />;
            }}
        >
            <SpecialCharLogo>F</SpecialCharLogo>
            <NomalCharLogo>LASHCARD.</NomalCharLogo>
        </MainLogo>
    );
};

export default Logo;
