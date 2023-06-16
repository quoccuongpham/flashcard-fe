import Welcome from "../page/Welcome/Welcome";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
export const publicRoutes = [
    { path: "/welcome", component: Welcome },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
];
export const privateRoutes = [];
