import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchClasses } from "./actions/classes";

//START Charlie Added
import Signin from "./components/Signin";
import { Route } from "react-router-dom";
//Import Protected Route
import ProtectedRoute from "./components/ProtectedRoute";
import CardsList from "./components/classes/CardsList";
//END Charlie Added
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Home from './components/Home';

import "./App.css";

function App(props) {
  useEffect(() => {
    props.fetchClasses()
  }, []) //

  return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />

        <ProtectedRoute exact path="/instructor" component={CardsList} />
        <ProtectedRoute exact path="/student" component={CardsList} />

        <Route path="/register" component={Signup} />

      </div>
  );
}

const mapStateToProps = state => {
  return {
    classes: state.classes.classes
  }
}

const mapDispatchToProps = {
  fetchClasses
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
