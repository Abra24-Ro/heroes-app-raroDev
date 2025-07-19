import { describe, expect, test } from "vitest";
import { types } from "../../../src/auth/types/types";

describe("Types", () => {
    test("debe de regresar estos types", () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });
    })
});