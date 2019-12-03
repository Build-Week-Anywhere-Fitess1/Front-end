import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import api from '../../utils/api';

import { fetchStudentClasses, deleteStudentClasses } from '../../actions/studentClasses';

//START Charlie
import ClassCard from './ClassCard';
//END Charlie

const CardsList = props => {

  useEffect(() => {
    // gets all of the classes the user is signed up for
    props.fetchStudentClasses();
  }, [])
  
  const handleDelete = (id, e) => {
    console.log(id, "id")
    e.preventDefault()
    props.deleteStudentClasses(id)
  }

  console.log('the user classes', props.studentClasses)

  return (
    <>
      <div>
        <h1>Your Classes</h1>

        <div style={{display:'flex', flexDirection:'row', }}>
          
          {props.studentClasses.map((item, index) => (
              <ClassCard key={index} class_details={item} handleDelete={(e) => handleDelete(item.classId, e)}/>
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    studentClasses: state.studentClasses.studentClasses
  }
}

const mapDispatchToProps = {
  fetchStudentClasses,
  deleteStudentClasses
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
