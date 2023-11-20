import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import Card from "../components/Card";

const LikePage = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let movieArray = [];
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    Promise.all(
      moviesId.map((id) =>
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=59c994c98aa80d4924f31c3b2d6c1cc5`
          )
          .then((res) => res.data)
      )
    )
      .then((movies) => setListData(movies))
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données du film :",
          error
        );
        setListData([]); // Définir un tableau vide en cas d'erreur
      });
  }, []);

  return (
    <div className="like-page">
      <NavBar />
      <h2>
        Coups de coeur <span>❤</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default LikePage;
