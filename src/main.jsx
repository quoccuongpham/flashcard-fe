import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import axios from "axios";
import { apiURL } from "./utils/constants.js";
axios.defaults.baseURL = apiURL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>
);
