import React from "react";
import { Link } from "react-router-dom";

//START Charlie
import { fetchClasses } from '../../actions/classes';
import { connect } from 'react-redux';
//END Charlie


function CardsList(props) {

  return (
    <div>
      
      <h1>Dashboard - Card List</h1>

      {/* {props.cards.map(cards => (
        <div className="class-card" key={cards.id}>
          <img
            className="class-image"
            src={cards.imageUrl}
            alt={cards.name}
          />
          <Link to={`/Cardlist/${cards.id}`}>
            <p>{cards.name}</p>
          </Link>
        </div>
      ))} */}
    </div>
  );
}

const mapStateToProps = state => {
  return{

      classes: state.classes

  };
}


const mapDispatchToProps = {
  
  fetchClasses

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardsList);
