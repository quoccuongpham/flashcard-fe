export const collectionReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_COLLECTION": {
            return {
                ...state,
                collections: action.payload,
            };
        }
        case "ADD_COLLECTION": {
            const collections = [...state.collections, action.payload];
            return {
                ...state,
                collections,
            };
        }
        case "DELETE_COLLECTION": {
            const collections = [...state.collections];
            const new_collections = collections.filter((element) => {
                return element.id !== payload.id;
            });
            return {
                ...state,
                collections: new_collections,
            };
        }
        default: {
            break;
        }
    }
};
