import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui";

const mockUseNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockUseNavigate,
  };
});

describe("Navbar", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "RaroDev",
      id: "123",
    },
    logout: vi.fn(),
  };

  beforeEach(() => vi.clearAllMocks());

  test("debe de mostrar el componente del usuario", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("RaroDev")).toBeTruthy();
  });

  test("debe llamar el logout y el navigate", () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
