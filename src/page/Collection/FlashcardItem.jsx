import { Box, Typography } from "@mui/material";
import { deepPurple, blue } from "@mui/material/colors";

import LinkStyled from "../../styledComponent/LinkStyled";
import FormatTime from "../../utils/FormatTime";
const FlashcardItem = ({ flashcard }) => {
    return (
        <LinkStyled to="/">
            <Box
                sx={{
                    padding: 2,
                    backgroundColor: deepPurple[50],
                    borderRadius: 2,
                }}
            >
                <Typography variant="p" fontWeight={700} color={blue[500]}>
                    {flashcard.word}
                </Typography>
                <Typography textAlign="right" fontStyle="italic">
                    {FormatTime(flashcard.createdAt)}
                </Typography>
            </Box>
        </LinkStyled>
    );
};

export default FlashcardItem;
