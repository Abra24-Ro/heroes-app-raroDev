import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PubliRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("PublicRoutes", () => {
  test("debe de mostrar el childre si no estan autenticados", () => {
    const ontextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={ontextValue}>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Public Route")).toBeTruthy();
  });
  test("debe de navegar si estan autenticados", () => {
    const ontextValue = {
      logged: true,
      user: {
        name: "Fernando",
        id: "123",
      },
    };
    render(
      <AuthContext.Provider value={ontextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Public Route</h1>
                </PublicRoute>
              }
            />
           
            <Route path="marvel" element={<h1>Pagina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Pagina Marvel")).toBeTruthy();
  });
});
