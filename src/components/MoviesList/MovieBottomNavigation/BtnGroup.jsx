import React from "react";
import BtnGroupStyle from "./BtnGroupStyle";

const BtnGroup = ({ nextPageClic, prevPageClic }) => {
  return (
    <BtnGroupStyle>
      <a href="#" onClick={prevPageClic}>
        PREVIEW
      </a>
      <a href="#">VIEW ALL</a>
      <a href="#" onClick={nextPageClic}>
        NEXT
      </a>
    </BtnGroupStyle>
  );
};

export default BtnGroup;
