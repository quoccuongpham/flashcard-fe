import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

import authReducer from "../reducer/authReducer";
import setAuthToken from "../utils/setAuthToken";
import { apiURL, LOCAL_STORAGE_TOKEN_NAME } from "../utils/constants";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        authLoading: true,
        user: null,
    });

    const loadUser = async () => {
        if (localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)) {
            setAuthToken(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME));
        }
        try {
            const response = await axios.get(`${apiURL}/auth`);
            if (response.data.success) {
                console.log("setAuthToken");
                dispatch({
                    type: "SET_AUTH",
                    payload: {
                        isAuthenticated: true,
                        user: response.data.user_id,
                    },
                });
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
            setAuthToken(null);
            dispatch({
                type: "SET_AUTH",
                payload: {
                    isAuthenticated: false,
                    user: null,
                },
            });
        }
    };
    useEffect(() => {
        (async function () {
            await loadUser();
        })();
    }, []);

    const login = async (userForm) => {
        // userForm = {username, password}
        try {
            const userInfo = await axios.post(`${apiURL}/auth/login`, userForm);
            if (userInfo.data.success) {
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    userInfo.data.accessToken
                );

                await loadUser();
            }
            return userInfo;
        } catch (error) {
            return {
                success: false,
                message: "Incorect username or password",
            };
        }
    };
    const register = async (userForm) => {
        try {
            const userInfo = await axios.post(
                `${apiURL}/auth/register`,
                userForm
            );
            if (userInfo.data.success) {
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    userInfo.data.accessToken
                );

                await loadUser();
            }
            return userInfo;
        } catch (error) {
            console.log("error");
        }
    };
    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
        dispatch({
            type: "SET_AUTH",
            payload: { isAuthenticated: false, user: null },
        });
    };
    const authContextData = { authState, login, register, logoutUser };
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
