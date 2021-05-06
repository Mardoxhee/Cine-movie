import React from "react";
import ListTitle from "./ListTitle";
import NavigationList from "./MoviesNavigation/NavigationList";
import MovieStyle from "./MoviesStyle";
import NavigationItem from "./MoviesNavigation/NavigationItem";

const Movies = () => {
  return (
    <MovieStyle>
      <ListTitle></ListTitle>
      <hr />
      <div></div>
      <NavigationList>
        <NavigationItem>Upcomming Movies</NavigationItem>
        <NavigationItem>Relesed Movies</NavigationItem>
        <NavigationItem>Best Of Library</NavigationItem>
      </NavigationList>
    </MovieStyle>
  );
};

export default Movies;
