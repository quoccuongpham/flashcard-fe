import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import { publicRoutes, privateRoutes } from "./index";
import DefaultLayout from "../components/Layout/DefaultLayout/DefaultLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import Auth from "./Auth";
const RouterRoute = () => {
    return (
        <>
            <Routes>
                <Route element={<Auth />}>
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
                </Route>
                <Route element={<ProtectedRoutes />}>
                    {privateRoutes.map((element, index) => {
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
                            ></Route>
                        );
                    })}
                </Route>
            </Routes>
        </>
    );
};

export default RouterRoute;
