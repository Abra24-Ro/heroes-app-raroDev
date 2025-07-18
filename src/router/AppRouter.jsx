import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";

import { LoginPage } from "../auth";
import { PriviteRoute } from "./PriviteRoute";
import { PublicRoute } from "./PubliRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PriviteRoute>
              <HeroesRoutes />
            </PriviteRoute>
          }
        />
        {/* <Route path="login" element={<LoginPage />} /> */}

        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
