import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const SearchMovie = () => {
  const [moviesData, setMoviesData] = useState([]); //stock les film récupérer
  const [search, setSearch] = useState("code");
  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
    //récupere les films de l'api dans un tableau
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=59c994c98aa80d4924f31c3b2d6c1cc5&query=${search}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="search-movie">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" className="button" />
        </form>
        <div className="btn-sort-container">
          <div
            className="btn-sort-top"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top <span>↑</span>
          </div>
          <div
            className="btn-sort-bad"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            <span>↓</span> Flop
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData
          .slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average; // trie les élément du meilleur au pire
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average; //trie les élements du pire au meilleur
            }
          })
          .map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default SearchMovie;
