import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import axios from "axios";
import { apiURL } from "./utils/constants.js";
import App from "./App.jsx";
// config axios
axios.defaults.baseURL = apiURL;
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

// custom theme mui
const theme = createTheme({
    typography: {
        fontFamily: [
            "Open Sans",
            "-apple-system",
            "Arial",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
