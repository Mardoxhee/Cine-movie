import React from "react";
import ListTitle from "./ListTitle";
import NavigationList from "./MoviesNavigation/NavigationList";
import MovieStyle from "./MoviesStyle";
import NavigationItem from "./MoviesNavigation/NavigationItem";
import ListCard from "./ListCard";
import BtnGroup from "./MovieBottomNavigation/BtnGroup";
import TopMovies from "../TopMovies/TopMovies";
import RecTitle from "../RECOMMANDED/RecTitle";

const Movies = () => {
  return (
    <MovieStyle>
      <ListTitle />
      <hr />
      <div className="DesignDiv"></div>
      <NavigationList />
      <ListCard />
      <BtnGroup></BtnGroup>
      <TopMovies />
      <RecTitle />
    </MovieStyle>
  );
};

export default Movies;
