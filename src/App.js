import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchClasses } from './actions/classes';

//START Charlie Added
import Signin from './components/Signin';
import { BrowserRouter as Router, Route } from "react-router-dom";
//Import Protected Route
import ProtectedRoute from './components/ProtectedRoute';
import CardsList from './components/classes/CardsList';
//END Charlie Added

import './App.css';

function App(props) {
  
  // useEffect(() => {
  //   props.fetchClasses()
  // }, [])

  return (
    <Router>
      <div className="App">
        Hello Anytime Fitness!

        <Route exact path="/" component={Signin} />

        <ProtectedRoute exact path="dashboard" component={CardsList} />

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