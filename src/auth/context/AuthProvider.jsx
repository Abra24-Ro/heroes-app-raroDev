import { useReducer } from "react";
import { authReducer } from "./AuthReducer";
import { AuthContext } from "./AuthContext";
import { types } from "../types/types";

// const initialState = {
//   logged: false,
// };
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const login = (nombre = "") => {
    const user = { id: Date.now() + Math.random() * 1000, name: nombre };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
