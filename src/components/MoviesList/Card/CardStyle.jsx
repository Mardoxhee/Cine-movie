import styled from "styled-components";
import backImage from "./fanta.jpg";

const CardStyle = styled.div`
  margin-top: 50px;
  height: 500px;
  width: 330px;
  padding-top: 344px;
  box-sizing: border-box;
  background-image: url(${backImage});
  background-size: 330px 600px;
  border-radius: 10px;
  margin-left: 10px;

  .HoverEffect {
    opacity: 0%;
    height: 343px;
    width: 330px;
    background-color: black;
    border-radius: 0 !important;
    margin-top: -523px !important ;
    border-radius: 10px 10px 0px 0px !important;

    &:hover {
      opacity: 60%;
    }
  }

  a {
    top: 80%;
    z-index: 999;
    text-align: center;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100px;
    position: relative;
    display: block;
    bottom: 20%;
    padding: 10px;
    background-color: transparent;
    border: 2px solid #ff4444;
    text-decoration: none;
    color: white;
    border-radius: 10px;
  }

  & div {
    background-color: white;
    height: 180px;
    width: 100%auto;
    border-radius: 0px 0px 10px 10px;
  }
`;

export default CardStyle;
