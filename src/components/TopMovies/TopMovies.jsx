import React from "react";
import TopMoviesStyle from "./TopMoviesStyle";
import TopTitle from "./TopTitle";
import { Slide } from "react-slideshow-image";

const TopMovies = () => {
  const slideImages = [
    "images/slide_2.jpg",
    "images/slide_3.jpg",
    "images/slide_4.jpg",
  ];

  return (
    <TopMoviesStyle>
      <TopTitle />
    </TopMoviesStyle>
  );
};
export default TopMovies;
