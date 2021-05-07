import styled from "styled-components";
import backImage from "./fanta.jpg";

const CardStyle = styled.div`
  margin-top: 50px;
  height: 500px;
  width: 330px;

  box-sizing: border-box;
  background-image: url(${backImage});
  background-size: 330px 600px;
  border-radius: 10px;

  .HoverEffect {
    opacity: 0%;
    height: 345px;
    width: 330px;
    background-color: black;
    border-radius: 0 !important;
    margin-top: -524px !important ;
    border-radius: 10px 10px 0px 0px !important;

    &:hover {
      opacity: 60%;
    }
  }

  & div {
    background-color: white;
    height: 180px;
    width: 100%auto;
    border-radius: 0px 0px 10px 10px;
    &:hover {
    }
  }
  padding-top: 344px;
`;
export default CardStyle;
