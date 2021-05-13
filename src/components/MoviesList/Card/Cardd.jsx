import React from "react";
import CarddStyle from "./CarddStyle";

const Cardd = ({ movieItem }) => {
  return (
    <CarddStyle>
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movieItem.poster_path}
        alt="you"
        className=" animate__animated  animate__zoomIn delay-10s "
      />
      <div>
        <h3>{movieItem.title}</h3>
        <p>{movieItem.vote_average}</p>
      </div>
    </CarddStyle>
  );
};

export default Cardd;
