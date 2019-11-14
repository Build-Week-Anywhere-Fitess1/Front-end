import React from 'react';
import { Route } from "react-router-dom";
import './App.css';

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <h1>Hello Anytime Fitness!</h1>

      {/* <Route exact path="/signin" component={SignIn} />
      <Route exact  path="/" component={Home} />
      <Route path="/instructor" component={Sensei}/>
      <Route path="/student" component={Grasshopper} />
      <Route path="/signup" component={SignUp} /> */}
    </div>


  );
}

export default App;
