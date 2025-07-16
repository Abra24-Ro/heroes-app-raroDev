import { Link } from "react-router-dom";

export const HeroItem = ({ hero }) => {
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div
      className="card shadow-sm border-0 rounded-4 h-100 d-flex flex-column animate__animated animate__fadeIn"
      id={id}
    >
      <img
        src={heroImageUrl}
        className="card-img-top rounded-top-4"
        alt={superhero}
        style={{ height: "300px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column ">
        <h4 className="card-title fw-bold text-primary">{superhero}</h4>
        <h6 className="text-muted mb-2">{alter_ego}</h6>

        {alter_ego !== characters && (
          <p className="mb-1 text-body-secondary">
            <strong>También conocido como:</strong> {characters}
          </p>
        )}

        <p className="mb-1">
          <strong>Aparición:</strong> {first_appearance}
        </p>

        <p className="mb-0 mt-auto">
          <strong>Editorial:</strong> {publisher}
        </p>
        <Link to={`/hero/${id}`}> Leer más</Link>
      </div>
    </div>
  );
};
