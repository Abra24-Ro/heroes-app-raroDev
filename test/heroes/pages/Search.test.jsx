import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { Search } from "../../../src/heroes/pages/Search";

describe("Pruebas en <Search />", () => {
  test("debe de mostrar el componente correctamente", () => {
    const { container } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar a Batman y el input con el valor de query", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Search />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");

    expect(input.value).toBe("batman");

    const img = screen.getByRole("img");
    expect(img.src).toContain("/assets/heroes/dc-batman.jpg");
  });

  test("debe de mostrar un error si no se encuentra el hero", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <Search />
      </MemoryRouter>
    );

    expect(
      screen.getByText("No se encontraron resultados para tu búsqueda")
    ).toBeTruthy();
  });

  test("debe de llamar al navigate a la pantalla new", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <Search />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: { name: "searchText", value: "batman" },
    });
  });
});
