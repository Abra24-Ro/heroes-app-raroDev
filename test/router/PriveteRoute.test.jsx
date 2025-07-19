import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { AuthContext } from "../../src/auth";

import { PriviteRoute } from "../../src/router/PriviteRoute";
import { MemoryRouter } from "react-router-dom";

describe("pruebas en private route", () => {
  test("debe de mostrar el childre si  estan autenticados", () => {
    Storage.prototype.setItem = vi.fn();

    const ontextValue = {
      logged: true,
      user: {
        name: "Fernando",
        id: "123",
      },
    };

    render(
      <AuthContext.Provider value={ontextValue}>
        <MemoryRouter>
          <PriviteRoute>
            <h1>Private Route</h1>
          </PriviteRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Private Route")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");
  });
});
