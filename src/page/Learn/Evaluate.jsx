import { Stack, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useContext } from "react";
import { LearnContext } from "../../context/LearnContext";
const Evaluate = () => {
    const { cardState, evaluateCard } = useContext(LearnContext);
    const data = {
        id: cardState?.currentCard?.id,
        collection_id: cardState?.currentCard?.collection_id,
        value: "",
    };
    return cardState.currentCard !== undefined ? (
        <Stack direction="row" justifyContent="center" gap={2} marginTop={3}>
            <LoadingButton
                variant="contained"
                color="error"
                disabled={cardState.isLoading}
                onClick={() => {
                    data.value = "again";
                    evaluateCard(data);
                }}
            >
                Again
            </LoadingButton>
            <LoadingButton
                variant="contained"
                color="info"
                disabled={cardState.isLoading}
                onClick={() => {
                    data.value = "hard";
                    evaluateCard(data);
                }}
            >
                Hard
            </LoadingButton>
            <LoadingButton
                variant="contained"
                color="success"
                disabled={cardState.isLoading}
                onClick={() => {
                    data.value = "easy";
                    evaluateCard(data);
                }}
            >
                Good
            </LoadingButton>
        </Stack>
    ) : null;
};

export default Evaluate;
