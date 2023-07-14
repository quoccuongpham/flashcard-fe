// public page
import Welcome from "../page/Welcome/Welcome";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
// private page
import Home from "../page/Home/Home";
import Collection from "../page/Collection";
import News from "../page/News";
import Analysis from "../page/Analysis";
import Setting from "../page/Setting";
import Docs from "../page/Docs/Docs";
import AddFlashCard from "../page/AddFlashcard";
import Learn from "../page/Learn";

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
    { path: "/collection", component: Collection, layout: DefaultLayout },
    { path: "/news", component: News, layout: DefaultLayout },
    { path: "/analysis", component: Analysis, layout: DefaultLayout },
    { path: "/docs", component: Docs, layout: DefaultLayout },
    { path: "/setting", component: Setting, layout: DefaultLayout },
    { path: "/addflashcard", component: AddFlashCard, layout: DefaultLayout },
    { path: "/learn", component: Learn, layout: DefaultLayout },
];
