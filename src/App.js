import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Route, Link } from "react-router-dom";

//Import Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

//-->START Import Components
import Home from "./components/Home";
import InstrDash from "./components/Dashboards/InstrDash";
import StuDash from "./components/Dashboards/StuDash";
//<--END Import Components

//-->START Import Fetch functions from Action file 
import { fetchClasses } from "./actions/classes";
import { fetchCategories } from "./actions/categories";
//<--END Import Fetch Functions from Action file

import "./App.css";

function App(props) {
  

  return (
    <div className="App">
      
      <Route exact path="/" component={Home} />

      <ProtectedRoute exact path="/instructor" component={InstrDash} />

      <ProtectedRoute exact path="/student" component={StuDash} />

      {/* <ProtectedRoute path="/instructor/classes" component={NewClass} /> */}

    </div>
  );
}

const mapStateToProps = state => {
  return {
    classes: state.classes.classes,
    categories: state.categories
  };
};

const mapDispatchToProps = {
  fetchClasses, 
  fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
