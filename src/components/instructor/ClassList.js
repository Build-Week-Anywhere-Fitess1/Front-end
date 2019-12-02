import React, { useState, useEffect } from "react";
import { connect } from  "react-redux";
import api from "../../utils/api";

//START Charlie
import { fetchClasses } from "../../actions/classes";
import ClassCard from "./ClassCard";
//END Charlie

const CardsList = props => {
  
  console.log(props.class_item[0], 'ClassList')

  return (
    <>
      <div>
        <h1>Your Classes</h1>

        {/* <h1>Dashboard - Card List</h1> */}

        <div style={{ display: "flex", flexDirection: "row" }}>
          {props.class_item.map((item, index) => (
            <ClassCard key={index} class_details={item} />
          ))}
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = state => {
//   return {
    
//     classes: state.classes

//   };
// };


// export default connect(mapStateToProps)(CardsList);

export default CardsList;