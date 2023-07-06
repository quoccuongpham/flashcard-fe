import { createContext, useReducer } from "react";
import axios from "axios";
import { collectionReducer } from "../reducer/collectionReducer";
import { apiURL } from "../utils/constants";

export const CollectionContext = createContext();

const CollectionContextProvider = ({ children }) => {
    const [collectionState, dispatch] = useReducer(collectionReducer, {
        collections: [],
    });
    const loadCollection = async () => {
        const {
            data: { collections },
        } = await axios.get(`${apiURL}/collection`);
        dispatch({ type: "LOAD_COLLECTION", payload: collections });
    };

    const newCollection = async (formData) => {
        const result = await axios.post(`${apiURL}/collection`, formData);
        if (result.data.success) {
            dispatch({
                type: "ADD_COLLECTION",
                payload: result.data.collection_id,
            });
            // collection_id that ra la collection, can sua lai ten o backend
        }

        return result.data.success;
    };
    const collectionData = {
        collectionState,
        loadCollection,
        newCollection,
    };
    return (
        <CollectionContext.Provider value={collectionData}>
            {children}
        </CollectionContext.Provider>
    );
};

export default CollectionContextProvider;
