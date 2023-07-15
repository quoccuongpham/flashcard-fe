import { useReducer } from "react";
import { createContext } from "react";
import cardReducer from "../reducer/cardReducer";
import axios from "axios";
import { apiURL } from "../utils/constants";

export const LearnContext = createContext();

const LearnContextProvider = ({ children }) => {
    const initalState = {
        isFlip: false,
        isLoading: false,
        currentCard: {},
        flashcards: [],
    };
    const [cardState, dispatchCard] = useReducer(cardReducer, initalState);

    const flipCard = () => {
        const action = {
            type: "FLIP_CARD",
        };
        dispatchCard(action);
    };
    const loadCard = async (collection_id) => {
        const {
            data: { flashcard_info },
        } = await axios.get(`${apiURL}/memorize/${collection_id}`);
        const action = {
            type: "LOAD_CARD",
            payload: {
                flashcards: flashcard_info,
            },
        };
        dispatchCard(action);
    };
    const setLoading = (isLoading) => {
        const action = {
            type: "SET_LOADING",
            payload: {
                isLoading,
            },
        };
        dispatchCard(action);
    };
    const setCatd = (card) => {
        const action = {
            type: "SET_CARD",
            payload: card,
        };
        dispatchCard(action);
    };
    const evaluateCard = (data) => {
        const action = {
            type: "EVALUATE_CARD",
            payload: {
                formData: {
                    flashcard_id: data.id,
                    value: data.value,
                    collection_id: data.collection_id,
                },
                setLoading,
            },
        };
        dispatchCard(action);
    };
    const data = {
        cardState,
        flipCard,
        evaluateCard,
        setCatd,
        loadCard,
    };
    return (
        <LearnContext.Provider value={data}>{children}</LearnContext.Provider>
    );
};

export default LearnContextProvider;
