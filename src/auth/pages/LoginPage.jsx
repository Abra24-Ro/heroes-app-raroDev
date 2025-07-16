
import { useNavigate } from "react-router-dom";
import './LoginPage.css'

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/marvel", { replace: true });
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
          <hr />

          

          <button className="btn btn-primary w-100" onClick={onLogin}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
