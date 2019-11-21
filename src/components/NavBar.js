import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Sign IN
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructor/:id" activeClassName="activeNavButton">
              Sensei
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/:id" activeClassName="activeNavButton">
              Grasshopper
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="activeNavButton">
              Sign UP
            </NavLink>
          </li>
          <SearchBar />
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
