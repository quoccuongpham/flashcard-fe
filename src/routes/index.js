import Welcome from "../page/Welcome/Welcome";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import IntroLayout from "../components/Layout/IntroLayout/IntroLayout";

export const publicRoutes = [
    { path: "/welcome", component: Welcome, layout: IntroLayout },
    { path: "/login", component: Login, layout: IntroLayout },
    { path: "/register", component: Register, layout: IntroLayout },
];
export const privateRoutes = [];
