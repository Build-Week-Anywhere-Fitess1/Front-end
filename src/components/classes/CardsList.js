import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from '../../utils/api';

//START Charlie
import { fetchClasses } from '../../actions/classes';
import ClassCard from './ClassCard';
//END Charlie

const CardsList = props => {

  const [userClasses, setUserClasses] = useState([])

  useEffect(() => {
    // gets all of the classes the user is signed up for
    api().get(`/api/user/classes`)
      .then(res => {
        setUserClasses(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    api().delete(`/api/user/classes/${id}`)
      .then(res => {
        console.log(res)
        setUserClasses(userClasses.filter(singleClass => (
          singleClass.id !== id
        )))
      })
      .catch(err => console.log(err.response))
  }

  // console.log(userClasses, 'after fetch')

  return (
    <>
      <div>
        <h1>Your Classes</h1>

        <div style={{display:'flex', flexDirection:'row', }}>
          
          {userClasses.map((item, index) => (
              <ClassCard key={index} class_details={item} handleDelete={handleDelete}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsList;
