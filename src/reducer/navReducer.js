export const navReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_NAV":
            return {
                itemActive: payload,
            };
        default:
            break;
    }
};
