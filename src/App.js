import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchClasses } from './actions/classes';
import './App.css';

function App(props) {
  useEffect(() => {
    props.fetchClasses()
  }, [])

  return (
    <div className="App">
      Hello Anytime Fitness!
      {props.classes.map(item => (
        <div>
          {item.name}
        </div>
      ))}
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
