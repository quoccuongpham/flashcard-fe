import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Container, Box } from "@mui/material";
import styled from "@emotion/styled";
import { FlashcardContext } from "../../context/FlashcardContext";
import LearnContextProvider from "../../context/LearnContext";
import Card from "./Card";
import Evaluate from "./Evaluate";
const Learn = () => {
    const { flashcardState, loadLearnFlashcard } = useContext(FlashcardContext);
    const { state } = useLocation();
    useEffect(() => {
        loadLearnFlashcard(state.collection_id);
    }, []);
    const { learn_flashcards } = flashcardState;
    return (
        <LearnContextProvider>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    paddingTop: 4,
                }}
            >
                <Card
                    flashcard_info={
                        learn_flashcards[learn_flashcards.length - 1]
                    }
                />
                <Container>
                    <Evaluate />
                </Container>
            </Container>
        </LearnContextProvider>
    );
};

export default Learn;
