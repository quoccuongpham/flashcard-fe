const cardReducer = (state, action) => {
    switch (action.type) {
        case "FLIP_CARD": {
            return {
                ...state,
                isFlip: !state.isFlip,
            };
        }
        case "EVALUATE_CARD": {
            return {
                ...state,
                isFlip: false,
            };
        }
    }
};
export default cardReducer;
