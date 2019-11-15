import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import image from "./pics/Gym-pavement.jpg";

function App() {
  return (
    <div className="App">
      <NavBar />
      <img className="banner-image" src={image} alt="Gym Pavement" />

      {/* <h1>Hello Anytime Fitness!</h1> */}

      {/* <Route exact path="/signin" component={SignIn} />
      <Route exact  path="/" component={Home} />
      <Route path="/instructor" component={Sensei}/>
      <Route path="/student" component={Grasshopper} />
      <Route path="/signup" component={SignUp} /> */}
    </div>
  );
}

export default App;
