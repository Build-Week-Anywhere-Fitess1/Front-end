import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchClasses } from "./actions/classes";

//START Charlie Added
import Signin from "./components/Signin";
import { Route, Link } from "react-router-dom";
//Import Protected Route
import ProtectedRoute from "./components/ProtectedRoute";
import CardsList from "./components/classes/CardsList";
import Home from "./components/Home";
//END Charlie Added
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import NewClass from "./components/NewClass";

import InstrDash from "./components/Dashboards/InstrDash";
import StuDash from "./components/Dashboards/StuDash";
import "./App.css";

function App(props) {
  const roleId = localStorage.getItem("roleId");

  const [login, setLogin] = useState(0);

  const [signup, setSignup] = useState(0);

  // useEffect(() => {
  //   props.fetchClasses()
  // }, []) //

  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <NewClass /> */}

      <Route exact path="/" component={Home} />
      <Route exact path="/instructor/:id" component={InstrDash} />
      <Route path="/student/:id" component={StuDash} />
      <Route path="/classes" component={NewClass} />

      {/* <ProtectedRoute exact path="/instructor" component={CardsList} />
      <ProtectedRoute exact path="/student" component={CardsList} /> */}

      {/* {roleId === 1 && <InstructorCards />} */}
      {/* {roleId === 2 && <StudentCards />} */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    classes: state.classes.classes
  };
};

const mapDispatchToProps = {
  fetchClasses
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
