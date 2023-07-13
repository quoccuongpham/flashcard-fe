import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Container, Stack, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import FlashcardItem from "./FlashcardItem";
import { FlashcardContext } from "../../context/FlashcardContext";
import ButtonStyled from "../../styledComponent/ButtonStyled";
const Collection = () => {
    const { state } = useLocation();
    const { flashcardState, loadFlashcard } = useContext(FlashcardContext);
    useEffect(() => {
        loadFlashcard(state.collection_id);
        console.log(flashcardState);
    }, []);
    const navigate = useNavigate();
    return (
        <Container
            sx={{
                padding: 2,
                overflow: "scroll",
            }}
        >
            <Box textAlign="center" paddingBottom={2}>
                <Button
                    variant="contained"
                    sx={{ marginRight: 2 }}
                    onClick={() => {
                        return navigate("/addflashcard", {
                            state: {
                                collection_id: state.collection_id,
                            },
                        });
                    }}
                >
                    Thêm
                </Button>
                <Button variant="contained">Học</Button>
            </Box>
            <Stack direction="column" gap={1}>
                {flashcardState.flashcards.map((value, index) => {
                    return <FlashcardItem flashcard={value} key={index} />;
                })}
            </Stack>
        </Container>
    );
};

export default Collection;
