import { Link, NavLink } from "react-router-dom";
import { MenuHamburquesa } from "./MenuHamburquesa";

export const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active text-warning fw-bold" : "text-light"}`;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm px-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Asociaciones
        </Link>
        <MenuHamburquesa navLinkClass={navLinkClass} />
      </div>
    </nav>
  );
};
