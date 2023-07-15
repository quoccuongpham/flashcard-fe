import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Container } from "@mui/material";

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
                <Card collection_id={state.collection_id} />
                <Container>
                    <Evaluate />
                </Container>
            </Container>
        </LearnContextProvider>
    );
};

export default Learn;
