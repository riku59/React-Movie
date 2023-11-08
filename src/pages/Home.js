import React from "react";
import NavBar from "../components/NavBar";
import SearchMovie from "../components/SearchMovie";

const Home = () => {
  return (
    <div className="home-page">
      <NavBar />
      <SearchMovie />
    </div>
  );
};

export default Home;
