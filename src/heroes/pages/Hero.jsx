import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";
import { useMemo } from "react";

export const Hero = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroeById(id), [id]);

  if (!hero) return <Navigate to="/" />;

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const handleReturn = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Imagen */}
        <div className="col-md-4">
          <img
            src={`/assets/heroes/${id}.jpg`}
            alt={superhero}
            className="img-fluid rounded-4 shadow animate__animated animate__fadeInLeft"
          />
        </div>

        {/* Detalles */}
        <div className="col-md-8">
          <h2 className="fw-bold text-primary mb-3">{superhero}</h2>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              <strong>Alter ego:</strong> {alter_ego}
            </li>
            <li className="list-group-item">
              <strong>Primera aparición:</strong> {first_appearance}
            </li>
            <li className="list-group-item">
              <strong>Editorial:</strong> {publisher}
            </li>
            {alter_ego !== characters && (
              <li className="list-group-item">
                <strong>También conocido como:</strong> {characters}
              </li>
            )}
          </ul>

          {/* Botón de regreso */}
          <button
            className="btn btn-outline-primary rounded-pill px-4 mt-3"
            onClick={handleReturn}
          >
            ⬅ Regresar
          </button>
        </div>
      </div>
    </div>
  );
};
