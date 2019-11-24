import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

//START Charlie
import { fetchClasses } from "../../actions/classes";
import ClassCard from "./ClassCard";
//END Charlie

const CardsList = props => {
  const [userClasses, setUserClasses] = useState([]);

  useEffect(() => {
    api()
      .get(`/api/user/classes`)
      .then(res => {
        // console.log(res.data);
        setUserClasses(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // console.log(userClasses, 'after fetch')

  return (
    <>
      <div>
        <h1>Your Classes</h1>

        {/* <h1>Dashboard - Card List</h1> */}

        <div style={{ display: "flex", flexDirection: "row" }}>
          {userClasses.map((item, index) => (
            <ClassCard key={index} class_details={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsList;
