import React from "react";
import CardStyle from "./CardStyle";

const Card = () => {
  return (
    <CardStyle>
      <div>
        <h3>Red Boom</h3>
        <h4>Commic, Action, war</h4>
      </div>
      <div className="HoverEffect">
        {" "}
        <a href="">+Details</a>
      </div>
    </CardStyle>
  );
};

export default Card;
