import React from "react";

import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { PUBLIC_ROUTES, ROOT } from "./utils/constants/routes";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        {Object.keys(PUBLIC_ROUTES).map((routeKey) => {
          const { element: Element, layout: Layout } = PUBLIC_ROUTES[routeKey];

          return (
            <Route
              key={routeKey}
              path={routeKey}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        })}

        <Route path="*" element={<Navigate to={ROOT} />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
