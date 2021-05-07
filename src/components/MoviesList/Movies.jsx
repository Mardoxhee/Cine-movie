import React from "react";
import ListTitle from "./ListTitle";
import NavigationList from "./MoviesNavigation/NavigationList";
import MovieStyle from "./MoviesStyle";
import NavigationItem from "./MoviesNavigation/NavigationItem";
import Card from "./Card/Card";

const Movies = () => {
  return (
    <MovieStyle>
      <ListTitle></ListTitle>
      <hr />
      <div className="DesignDiv"></div>
      <NavigationList />
      <Card />
    </MovieStyle>
  );
};

export default Movies;
