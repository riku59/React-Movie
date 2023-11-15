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

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=59c994c98aa80d4924f31c3b2d6c1cc5`
        )
        .then((res) => movieArray.push(res.data))
        .then(() => setListData(movieArray));
    }
  }, []);

  return (
    <div className="like-page">
      <NavBar />
      <h2>
        Coups de coeur <span>❤</span>
        <div className="result">
          {listData.length > 0 ? (
            listData.map((movie) => <Card movie={movie} key={movie.id} />)
          ) : (
            <h2>Aucun coup de coeur pour le moment</h2>
          )}
        </div>
      </h2>
    </div>
  );
};

export default LikePage;
