// src/components/SearchAlert.jsx

export const SearchAlert = ({ q = "", heroes = [] }) => {
  if (q === "") {
    return (
      <div className="alert alert-primary animate__animated animate__fadeIn">
        Busca un héroe para ver los resultados
      </div>
    );
  }

  if (heroes.length === 0) {
    return (
      <div className="alert alert-danger animate__animated animate__fadeIn">
        No se encontraron resultados para tu búsqueda
        <strong> {q}</strong>
      </div>
    );
  }

  return null; // No muestra nada si hay resultados
};
