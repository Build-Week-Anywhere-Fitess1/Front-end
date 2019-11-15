import React from "react";
import { Link } from "react-router-dom";

function CardsList(props) {

  return (
    <div>
      {props.cards.map(cards => (
        <div className="class-card" key={cards.id}>
          {/* <img
            className="class-image"
            src={cards.imageUrl}
            alt={cards.name}
          /> */}
          <Link to={`/Cardlist/${cards.id}`}>
            <p>{cards.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CardsList;
