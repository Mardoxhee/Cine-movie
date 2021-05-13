import React from "react";
import ListTitle from "./ListTitle";
import NavigationList from "./MoviesNavigation/NavigationList";
import MovieStyle from "./MoviesStyle";
import ListCard from "./ListCard";
import BtnGroup from "./MovieBottomNavigation/BtnGroup";
import TopMovies from "../TopMovies/TopMovies";
import RecTitle from "../RECOMMANDED/RecTitle";

const Movies = ({ nextPageClic, prevPageClic }) => {
  return (
    <MovieStyle>
      <ListTitle />
      <hr />
      <div className="DesignDiv"></div>
      <NavigationList />
      <ListCard />
      <BtnGroup nextPageClic={nextPageClic} prevPageClic={prevPageClic} />
      <TopMovies />
      <RecTitle />
    </MovieStyle>
  );
};

export default Movies;
