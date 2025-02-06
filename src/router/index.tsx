import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import React from "react";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={Array.isArray(routeItem.path) ? routeItem.path[0] : routeItem.path}
              element={React.createElement(lazy(() => import(`../pages/${routeItem.component}`)))}
            />
          );
        })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
