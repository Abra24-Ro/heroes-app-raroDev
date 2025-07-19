import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { formState, onInputChange} = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.name.trim().length <= 1) return;

    const lastPath = localStorage.getItem("lastPath") || "/";
    login(formState.name);
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 container-login">
      <div
        className="card shadow p-4 rounded"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body">
          <h3 className="card-title text-center mb-4 text-primary">
            Iniciar Sesión
          </h3>

          <form onSubmit={handleSubmit} >
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
                name="name"
                value={formState.name}
                onChange={onInputChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
