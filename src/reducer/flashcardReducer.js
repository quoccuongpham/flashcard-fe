export const flashcardReducer = (state, action) => {
    switch (action.type) {
        //? payload={flashcards}
        case "LOAD_FLASHCARD": {
            return {
                ...state,
                flashcards: action.payload.flashcards,
            };
        }
        case "LOAD_LEARN_FLASHCARD": {
            return {
                ...state,
                learn_flashcards: action.payload.flashcard_info,
            };
        }
        case "ADD_FLASHCARD": {
            const flashcards = [...state.flashcards, action.payload.flashcard];
            return {
                ...state,
                flashcards,
            };
        }
        case "DELETE_FLASHCARD": {
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
        case "CHANGE_FLASHCARD": {
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
