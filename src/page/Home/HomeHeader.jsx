import { Stack, Typography, Chip } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { deepPurple } from "@mui/material/colors";
import styled from "@emotion/styled";

const ChipStyled = styled(Chip)({
    backgroundColor: deepPurple[50],
    color: deepPurple[500],
    fontWeight: 700,
});
const HomeHeader = () => {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="h4" fontSize={25} fontWeight={600}>
                Collection
            </Typography>
            <ChipStyled icon={<AddCircleRoundedIcon />} label="new" />
        </Stack>
    );
};

export default HomeHeader;
