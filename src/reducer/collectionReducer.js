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
            //? payload: {id}
            const collections = [...state.collections];
            const new_collections = collections.filter((element) => {
                return element.id !== action.payload.id;
            });
            return {
                ...state,
                collections: new_collections,
            };
        }
        case "CHANGE_NAME": {
            //? payload: {id, name, des}
            const collections = [...state.collections];
            const new_collections = collections.map((collection) => {
                if (collection.id === action.payload.id) {
                    collection.name = action.payload.name;
                    collection.description = action.payload.des;
                }
                return collection;
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
