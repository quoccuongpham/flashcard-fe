import axios from "axios";
import { apiURL } from "../utils/constants";

const cardReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_CARD": {
            const { flashcards } = action.payload;
            const currentCard = flashcards[flashcards.length - 1];
            return {
                ...state,
                flashcards,
                currentCard,
            };
        }
        case "SET_LOADING": {
            const {
                payload: { isLoading },
            } = action;
            return {
                ...state,
                isLoading,
            };
        }
        case "FLIP_CARD": {
            return {
                ...state,
                isFlip: !state.isFlip,
            };
        }
        case "SET_CARD": {
            return {
                ...state,
                currentCard: payload.card,
            };
        }
        case "EVALUATE_CARD": {
            const { flashcards } = state;
            const currentCard = flashcards.pop();
            const {
                payload: { formData, setLoading },
            } = action;
            console.log(formData);
            (async () => {
                setLoading(true);
                const rs = await axios.post(`${apiURL}/memorize`, formData);
                console.log(rs);
                setLoading(false);
            })();
            return {
                ...state,
                isFlip: false,
                flashcards,
                currentCard,
            };
        }
    }
};
export default cardReducer;
