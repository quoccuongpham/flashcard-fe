import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";

const Logo = styled.span`
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

const Header = () => {
    return (
        <Container
            maxWidth={false}
            sx={
                {
                    // backgroundColor: "blue",
                }
            }
        >
            <Box>
                <Logo>
                    <SpecialCharLogo>F</SpecialCharLogo>
                    <NomalCharLogo>LASHCARD.</NomalCharLogo>
                </Logo>
            </Box>
        </Container>
    );
};

export default Header;
