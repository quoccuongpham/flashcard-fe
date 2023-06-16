import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./index";

const RouterRoute = () => {
    return (
        <>
            <Routes>
                {publicRoutes.map((element, index) => {
                    const Page = element.component;
                    return (
                        <Route
                            key={index}
                            path={element.path}
                            element={<Page />}
                        />
                    );
                })}
            </Routes>
        </>
    );
};

export default RouterRoute;
