import React, { useState } from "react";

import { connect } from 'react-redux';

import api from "../../utils/api";

//-->START Redux Action File Import
import { postClass } from '../../actions/classes';
//<--END Redux Action File Import

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    button: {
        textDecoration: 'none',
        color: 'black',
        border: '2px solid #636363',
        borderRadius: '5px',
        padding: '10px 25px',
        backgroundColor: '#AEEA4F'
    }
})


const AddClassForm = props => {

    const classes = useStyles();
  
    const [isLoading, setIsLoading] = useState(false);

    const [newClassData, setNewClassData] = useState({
        title: '',
        instructorId: '',
        categoryId: '',
        scheduleTime: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
  });

  const handleChange = e => {
    setNewClassData({
      ...newClassData,
      [e.target.name]: e.target.value,
      // instructorId:parseInt(localStorage.getItem('instructorID'),10),
      // categoryId:parseInt(props.category.id, 10)
      instructorId:localStorage.getItem('instructorID'),
      categoryId:props.category.id
    });
  };

  const handleSubmit = e => {
    
    e.preventDefault();

    setIsLoading(true);


    // console.log(newClassData)

   props.postClass(newClassData)

    
  };
    


  return (
    <>
      {isLoading && <div>Loading... </div>}

      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "75px",
          marginBottom: "25px",
          height: "150px"
        }}
      >
        <h3>Post New Class</h3>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#82bef6",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "30px 0px",
            width: "175px"
          }}
        >


          <input
            type="text"
            name="title"
            placeholder="Class Name"
            value={newClassData.password}
            onChange={handleChange}
          />

        <input
            type="text"
            name="instructorId"
            
            value={localStorage.getItem('instructorID')}
            onChange={handleChange}
            disabled
          />

        <input
            type="text"
            name="categoryId"
            
            value={props.category.id}
            onChange={handleChange}
            disabled
          />


          <input
            type="text"
            name="scheduleTime"
            placeholder="Time"
            value=''
            onChange={handleChange}
            disabled
          />

        <input
            type="text"
            name="address"
            placeholder="Address"
            value={newClassData.address}
            onChange={handleChange}
          />

        <input
            type="text"
            name="city"
            placeholder="City"
            value={newClassData.city}
            onChange={handleChange}
          />

        <input
            type="text"
            name="state"
            placeholder="State"
            value={newClassData.state}
            onChange={handleChange}
          />

        <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={newClassData.zipCode}
            onChange={handleChange}
          />        
          

          <button style={{marginTop:"15px"}} className={classes.button} type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};


const mapStateToProps = state => {
    return {
      
      categories: state.categories,
      classes: state.classes
  
    };
  };
  
  const mapDispatchToProps = {
    
    postClass
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddClassForm);


