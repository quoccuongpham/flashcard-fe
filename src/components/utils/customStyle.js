import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
