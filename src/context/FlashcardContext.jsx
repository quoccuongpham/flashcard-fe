import { createContext, useReducer } from "react";
import axios from "axios";
import { flashcardReducer } from "../reducer/flashcardReducer";
import { apiURL } from "../utils/constants";

export const FlashcardContext = createContext();

const FlashcardContextProvider = ({ children }) => {
    const [flashcardState, dispatch] = useReducer(flashcardReducer, {
        flashcards: [],
        learn_flashcards: [],
    });
    const loadFlashcard = async (collection_id) => {
        const {
            data: { flashcards },
        } = await axios.get(`${apiURL}/flashcard/${collection_id}`);

        dispatch({ type: "LOAD_FLASHCARD", payload: { flashcards } });
    };
    const loadLearnFlashcard = async (collection_id) => {
        const {
            data: { flashcard_info },
        } = await axios.get(`${apiURL}/memorize/${collection_id}`);
        dispatch({ type: "LOAD_LEARN_FLASHCARD", payload: { flashcard_info } });
    };
    const newFlashcard = async (formData) => {
        const result = await axios.post(`${apiURL}/flashcard`, formData);
        if (result.data.success) {
            dispatch({
                type: "ADD_FLASHCARD",
                payload: { flashcard: result.data.new_flashcard },
            });
        }
        return result.data.success;
    };
    // const deleteCollection = async (id) => {
    //     const result = await axios.delete(`${apiURL}/collection`, {
    //         data: {
    //             collection_id: id,
    //         },
    //     });

    //     if (result.data.success) {
    //         dispatch({
    //             type: "DELETE_COLLECTION",
    //             payload: {
    //                 id: id,
    //             },
    //         });
    //     }
    // };
    // const changeName = async (id, name, des) => {
    //     const result = await axios.put(`${apiURL}/collection`, {
    //         collection_id: id,
    //         collection_name: name,
    //         collection_des: des,
    //     });
    //     if (result.data.success) {
    //         dispatch({
    //             type: "CHANGE_NAME",
    //             payload: {
    //                 id,
    //                 name,
    //                 des,
    //             },
    //         });
    //     }
    // };
    const flashcardData = {
        flashcardState,
        loadFlashcard,
        newFlashcard,
        loadLearnFlashcard,
        // deleteCollection,
        // changeName,
    };
    return (
        <FlashcardContext.Provider value={flashcardData}>
            {children}
        </FlashcardContext.Provider>
    );
};

export default FlashcardContextProvider;
