import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { AppRouter } from "../../src/router/AppRouter";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";

describe("AppRouter", () => {
  const contextValue = {
    logged: false,
  };

  test("debe de mostrar el login si no esta autenticado", () => {
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Iniciar Sesión")).toBeTruthy();

    screen.debug();
  });
  test("debe de mostrar el componente de marvel si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Fernando",
        id: "123",
      },
    };
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Marvel")).toBeTruthy();
  });
});
