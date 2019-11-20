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
import NewClass from './components/NewClass';


import "./App.css";
import NavBar from "./components/NavBar";

function App(props) {
  const roleId = localStorage.getItem("roleId");

  // useEffect(() => {
  //   props.fetchClasses()
  // }, []) //

  return (
      <div className="App">
        <NavBar />

<<<<<<< HEAD
        <h1> Hello Anytime Fitness!</h1>

        <Route exact path="/" component={Signin} />
        {/* <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Home} />
        <Route path="/instructor" component={Sensei} />
        {/* <Route path="/student" component={Grasshopper} /> */}
        {/* <Route path="/signup" component={SignUp} /> */}

        <ProtectedRoute exact path="/instructor" component={CardsList} />
        <ProtectedRoute exact path="/student" component={CardsList} />
        {/* {props.classes.map(item => (
          <div>
            {item.name}
          </div>
        ))} */}
=======
        <NewClass />

        <Route exact path="/" component={Signin} />

        <ProtectedRoute exact path="/instructor" component={CardsList} />
        <ProtectedRoute exact path="/student" component={CardsList} />

        <Route path="/register" component={Signup} />

        {/* {roleId === 1 && <InstructorCards />} */}
        {/* {roleId === 2 && <StudentCards />} */}

>>>>>>> d02feeea7ac0d1aef8b7702a7348edec6b2f685f
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
