import { format } from "date-fns";
import React, { useState } from "react";

const Card = ({ movie }) => {
  // Convertir la chaîne de caractères de la date en objet Date
  const releaseDate = new Date(movie.release_date);

  // Formater la date comme désiré (par exemple, en "dd-MM-yyyy")
  const formattedReleaseDate = format(releaseDate, "dd/MM/yyyy");

  // Couper le chiffre à la dixième décimale
  const roundedVoteAverage = movie.vote_average.toFixed(1);

  // Table de correspondance entre les identifiants de genre et les noms de genre
  const genreMap = {
    28: "Action",
    16: "Animation",
    12: "Aventure",
    35: "Comédie",
    80: "Crime",
    99: "Documentaire",
    18: "Drame",
    10751: "Familial",
    14: "Fantastique",
    10752: "Guerre",
    36: "Histoire",
    27: "Horreur",
    10402: "Musique",
    9648: "Mystère",
    10749: "Romance",
    878: "Science-Fiction",
    53: "Thriller",
    10770: "Téléfilm",
    37: "Western",
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(movie.id.toString())) {
      // vérifie qu'il n'y a pas déja le film ajouté
      storedData.push(movie.id); // faire un push pour évité d'écraser les données.
      window.localStorage.movies = storedData;
    }
  };

  // Transformer les identifiants de genre en noms de genre
  const genres = movie.genre_ids.map((genreId) => genreMap[genreId]);

  return (
    <div className="card">
      <div className="card-img">
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
              : "./img/poster.jpg"
          }
          alt={`affiche ${movie.title}`}
        />
      </div>
      <h3>{movie.title}</h3>
      {formattedReleaseDate ? <p>sortie le: {formattedReleaseDate}</p> : null}

      <div className="note">
        <p>{roundedVoteAverage} / 10 </p> <span>⭐</span>
      </div>

      <div className="genre">
        {genres.map((genre, index) => (
          <div key={index} className="genre-bubble">
            {genre}
          </div>
        ))}
      </div>
      <h3>Stnopsis :</h3>
      <p className={"synopsis-truncated"}>{movie.overview}</p>
      <div className="btn-love" onClick={() => addStorage()}>
        Ajouter aux coups de coeur
      </div>
    </div>
  );
};

export default Card;
