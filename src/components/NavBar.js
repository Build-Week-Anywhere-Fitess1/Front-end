import React from "react";
import { NavLink } from "react-router-dom";

import "../App.css";

function NavBar() {


    return (
        <div className="App">
            <header>
                <ul className="navbar">
                     <li><NavLink exact to="/signin" activeClassName="activeNavButton">Sign IN</NavLink></li>
                     <li><NavLink exact  to="/" activeClassName="activeNavButton">Home</NavLink></li>
                    <li><NavLink to="/instructor" activeClassName="activeNavButton">Sensei</NavLink></li>
                    <li><NavLink to="/student" activeClassName="activeNavButton">Grasshopper</NavLink></li>
                    <li><NavLink to="/signup" activeClassName="activeNavButton">Sign UP</NavLink></li>
                </ul>
            </header>
        </div>
    );
}

export default NavBar