import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchClasses } from "./actions/classes";

//START Charlie Added
import Signin from "./components/Signin";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Import Protected Route
import ProtectedRoute from "./components/ProtectedRoute";
import CardsList from "./components/classes/CardsList";
//END Charlie Added

import "./App.css";
import NavBar from "./components/NavBar";

function App(props) {
  // useEffect(() => {
  //   props.fetchClasses()
  // }, []) //

  return (
    <Router>
      <div className="App">
        <NavBar />

        <h1> Hello Anytime Fitness!</h1>

        <Route exact path="/" component={Signin} />
        {/* <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Home} />
        <Route path="/instructor" component={Sensei} />
        <Route path="/student" component={Grasshopper} />
        <Route path="/signup" component={SignUp} /> */}

        <ProtectedRoute exact path="/instructor" component={CardsList} />
        <ProtectedRoute exact path="/student" component={CardsList} />
        {/* {props.classes.map(item => (
          <div>
            {item.name}
          </div>
        ))} */}
      </div>
    </Router>
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
