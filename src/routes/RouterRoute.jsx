import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import { publicRoutes, privateRoutes } from "./index";
import DefaultLayout from "../components/Layout/DefaultLayout/DefaultLayout";

const RouterRoute = () => {
    return (
        <>
            <Routes>
                {publicRoutes.map((element, index) => {
                    const Page = element.component;
                    let Layout = DefaultLayout;
                    if (element.layout) {
                        Layout = element.layout;
                    } else if (element.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={element.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </>
    );
};

export default RouterRoute;
