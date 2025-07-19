import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroItem } from "../components/HeroItem";
import queryString from "query-string";
import { useMemo } from "react";
import { getHeroesByName } from "../helpers";
import { SearchAlert } from "./SearchAlert";


export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = useMemo(() => getHeroesByName(q), [q]);

  const { searchText, onInputChange } = useForm({ searchText: q });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">🔎 Buscar Héroes</h2>
      <hr className="mb-5" />

      <div className="row">
        <div className="col-md-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title mb-3">Búsqueda</h4>
              <form onSubmit={onSearchSubmit} aria-label="form">
                <input
                  type="text"
                  placeholder="Escribe el nombre de un héroe..."
                  className="form-control mb-3"
                  name="searchText"
                  autoComplete="off"
                  value={searchText}
                  onChange={onInputChange}
                />
                <button className="btn btn-primary w-100">Buscar</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-7 mt-4 mt-md-0">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title mb-3">Resultados</h4>

                <SearchAlert q={q} heroes={heroes} />

              {heroes.map((hero) => (
                <HeroItem key={hero.id} hero={hero} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
