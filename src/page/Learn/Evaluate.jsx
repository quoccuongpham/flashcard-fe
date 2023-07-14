import { Stack, Button } from "@mui/material";
import { useContext } from "react";
import { LearnContext } from "../../context/LearnContext";
const Evaluate = () => {
    const { evaluateCard } = useContext(LearnContext);
    return (
        <Stack direction="row" justifyContent="center" gap={2} marginTop={3}>
            <Button variant="contained" color="error" onClick={evaluateCard}>
                Again
            </Button>
            <Button variant="contained" color="info" onClick={evaluateCard}>
                Hard
            </Button>
            <Button variant="contained" color="success" onClick={evaluateCard}>
                Good
            </Button>
        </Stack>
    );
};

export default Evaluate;
