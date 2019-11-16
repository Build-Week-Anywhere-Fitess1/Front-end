import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

import SearchBar from "./SearchBar";


function NavBar() {


    return (
        <div className="App">
            <header>
                <ul className="navbar">
                     <li><NavLink exact to="/signin" activeClassName="activeNavButton">Sign IN</NavLink></li>
                     <li><NavLink exact  to="/home" activeClassName="activeNavButton">Home</NavLink></li>
                    <li><NavLink to="/instructor" activeClassName="activeNavButton">Sensei</NavLink></li>
                    <li><NavLink to="/student" activeClassName="activeNavButton">Grasshopper</NavLink></li>
                    <li><NavLink to="/register" activeClassName="activeNavButton">Sign UP</NavLink></li>
                    <SearchBar />
                </ul>
            </header>

        </div>
    );
}

export default NavBar