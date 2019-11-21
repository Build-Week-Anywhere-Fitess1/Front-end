import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchClasses } from "./actions/classes";

//START Charlie Added
import Signin from "./components/Signin";
import { Route, Link } from "react-router-dom";
//Import Protected Route
import ProtectedRoute from "./components/ProtectedRoute";
import CardsList from "./components/classes/CardsList";
//END Charlie Added
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import NewClass from "./components/NewClass";

import Home from "./components/Home";
import InstrDash from "./components/Dashboards/InstrDash";
import StuDash from "./components/Dashboards/StuDash";
import "./App.css";

function App(props) {
  const roleId = localStorage.getItem("roleId");

  // useEffect(() => {
  //   props.fetchClasses()
  // }, []) //

  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <NewClass /> */}

      <Route path="/" component={Home} />
      <Route path="/instructor" component={InstrDash} />
      <Route path="/student" component={StuDash} />

      {/* <ProtectedRoute exact path="/instructor" component={CardsList} />
      <ProtectedRoute exact path="/student" component={CardsList} /> */}

      {/* {roleId === 1 && <InstructorCards />} */}
      {/* {roleId === 2 && <StudentCards />} */}
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     classes: state.classes.classes
//   }
// }

// const mapDispatchToProps = {
//   fetchClasses
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
