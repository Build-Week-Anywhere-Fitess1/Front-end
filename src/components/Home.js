import React from "react";
import { Route } from "react-router-dom";

import Signup from "./Signup";
import Signin from "./Signin";
import "../App.css";

function Home() {
  return (
    <div>
      <h1>Welcome to Anytime Fitness</h1>
      <h2>Fitness the Way YOU Want!</h2>
      <Signup /> or <Signin />
    </div>
  );
}

export default Home;
