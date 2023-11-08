import React from "react";

const SearchMovie = () => {
  return (
    <div className="search-movie">
      <input type="text" placeholder="Entrez le titre d'un film" />
      <button>Rechercher</button>
    </div>
  );
};

export default SearchMovie;
