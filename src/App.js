import React, { useState, useEffect } from "react";
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
import BreadCrubmsList from './components/student/BreadCrumbsList';

import "./App.css";

function App(props) {
  const roleId = localStorage.getItem("roleId");

  // useEffect(() => {
  //   props.fetchClasses()
  // }, []) //

  return (
      <div className="App">
        <NavBar />

        <BreadCrubmsList />

        {/*======ROUTES======}*/}
        <Route exact path="/signin" component={Signin} />

        {/* <ProtectedRoute exact path="/instructor" component={CardsList} /> */}
        {/* <ProtectedRoute exact path="/student" component={CardsList} /> */}

        <Route path="/register" component={Signup} />

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
