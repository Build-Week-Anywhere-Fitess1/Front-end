import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//START Charlie
import { fetchClasses } from "../../actions/classes";
import { connect } from "react-redux";
import ClassCard from "./ClassCard";

//END Charlie

const CardsList = props => {
  console.log(props.classes.classes, "State-Class-List-Component");

  fetchClasses();

  useEffect(() => {
    fetchClasses();
  }, []);

  console.log(props.classes.classes, "after fetch");

  return (
    <>
      <div>
        <h1>Your Classes</h1>

        <div style={{ display: "flex", flexDirection: "row" }}>
          {props.classes.classes.map((item, index) => (
            <ClassCard key={index} class_details={item} />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    classes: state.classes
  };
};

const mapDispatchToProps = {
  fetchClasses
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
