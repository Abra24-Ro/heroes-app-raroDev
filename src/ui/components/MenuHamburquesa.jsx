import { NavLink, useNavigate } from "react-router-dom";

export const MenuHamburquesa = ({ navLinkClass }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };
  return (
    <>
      {/* Botón de hamburguesa para móviles */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menú colapsable */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className={navLinkClass} to="/marvel">
              Marvel
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={navLinkClass} to="/dc">
              DC
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={navLinkClass} to="/search">
              Buscar
            </NavLink>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a
              className="nav-link text-info"
              href="https://www.linkedin.com/in/robinson-ojeda-9273a4346/"
              target="_blank"
              rel="noreferrer noopener"
            >
              RaroDev
            </a>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-outline-danger btn-sm nav-link px-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
