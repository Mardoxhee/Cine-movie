import React from "react";
import ListTitle from "./ListTitle";
import NavigationList from "./MoviesNavigation/NavigationList";
import MovieStyle from "./MoviesStyle";
import NavigationItem from "./MoviesNavigation/NavigationItem";
import ListCard from "./ListCard";
import NextPreviewBtn from "./NextPreviewStyle";

const Movies = () => {
  return (
    <MovieStyle>
      <ListTitle />
      <hr />
      <div className="DesignDiv"></div>
      <NavigationList />
      <ListCard></ListCard>
      <NextPreviewBtn />
    </MovieStyle>
  );
};

export default Movies;
