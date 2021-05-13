import React, { useContext } from "react";

import ListCardStyle from "./ListCardSTyle";
import { MoviesContext } from "../MoviesContext/MovieContext";
import Cardd from "./Card/Cardd";

const ListCard = () => {
  const moviesContext = useContext(MoviesContext);

  return (
    <ListCardStyle>
      {moviesContext.map((movieItem) => {
        return <Cardd movieItem={movieItem} />;
      })}
    </ListCardStyle>
  );
};

export default ListCard;
