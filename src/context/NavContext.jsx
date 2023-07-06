import { createContext, useReducer } from "react";
import { navReducer } from "../reducer/navReducer";
export const NavContext = createContext();

const NavContextProvider = ({ children }) => {
    const [navState, dispatch] = useReducer(navReducer, {
        itemActive: 0, // id of item is active
    });
    const changeNav = (navItemActive) => {
        dispatch({
            type: "SET_NAV",
            payload: navItemActive,
        });
    };
    const navData = { navState, changeNav };
    return (
        <NavContext.Provider value={navData}>{children}</NavContext.Provider>
    );
};

export default NavContextProvider;
