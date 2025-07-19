import { describe, expect, test } from "vitest";
import { authReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";

describe("AuthReducer", () => {
  test("debe de retornar el estado por defecto ", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("debe de autenticar el usuario", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Fernando",
        id: "123",
      },
    };
    const state = authReducer({ logged: false }, {});

    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: true, user: action.payload });
  });

  test("debe de desautenticar el usuario", () => {
    const state = {
      logged: true,
      user: {
        name: "Fernando",
        id: "123",
      },
    };
    const action = {
      type: types.logout,
    };
    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });
});
