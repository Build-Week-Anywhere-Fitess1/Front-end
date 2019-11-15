import React from "react";
import { Route, NavLink } from "react-router-dom";
// import CardDescription from "./CardDescription";


function Cards(props) {
  const item = props.Cards.find(
    thing => `${thing.id}` === props.match.params.id
  );
  // console.log(item);

  return (
    <div className="Cards-wrapper">
      <p>Class Name Here</p>
      <nav>
        <NavLink to={`/class/${Cardlist.id}/description`}>
          Description
        </NavLink>

        <NavLink to={`/class/${Cardlist.id}/pricing`}> 
        Pricing
        </NavLink>
      </nav>

      <Route
        exact path={`/class/${Cardlist.id}/description`}
        render={props => <ClassDescription {...props} Cards={Cards} />}
      />
      <Route
        exact path={`/class/${Cardlist.id}/pricing`}
        render={props => <ClassPricing {...props} Cards={Cards} />}
      />
    </div>
  );
}

export default Item;
