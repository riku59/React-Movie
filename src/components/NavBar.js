import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="coups-de-coeur">
            <li>Coups de coeur</li>
          </NavLink>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
};

export default NavBar;
