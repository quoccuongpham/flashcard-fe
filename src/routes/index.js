// public page
import Welcome from "../page/Welcome/Welcome";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
// private page
import Home from "../page/Home/Home";
import Docs from "../page/Docs/Docs";

// layout
import DefaultLayout from "../components/Layout/DefaultLayout/DefaultLayout";
import IntroLayout from "../components/Layout/IntroLayout/IntroLayout";

export const publicRoutes = [
    { path: "/welcome", component: Welcome, layout: IntroLayout },
    { path: "/login", component: Login, layout: IntroLayout },
    { path: "/register", component: Register, layout: IntroLayout },
];
export const privateRoutes = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/docs", component: Docs, layout: DefaultLayout },
];
