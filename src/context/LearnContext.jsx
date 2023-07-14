import { useReducer } from "react";
import { createContext } from "react";
import cardReducer from "../reducer/cardReducer";

export const LearnContext = createContext();

const LearnContextProvider = ({ children }) => {
    const initalState = {
        isFlip: false,
    };
    const [cardState, dispatchCard] = useReducer(cardReducer, initalState);

    const flipCard = () => {
        const action = {
            type: "FLIP_CARD",
        };
        dispatchCard(action);
    };

    const evaluateCard = () => {
        const action = {
            type: "EVALUATE_CARD",
        };
        dispatchCard(action);
    };
    const data = {
        cardState,
        flipCard,
        evaluateCard,
    };
    return (
        <LearnContext.Provider value={data}>{children}</LearnContext.Provider>
    );
};

export default LearnContextProvider;
