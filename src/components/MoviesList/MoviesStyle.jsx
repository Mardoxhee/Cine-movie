import styled from "styled-components";

const MovieStyle = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #f6f6f6;
  padding: 80px;

  & hr {
    height: 3px;
    width: 210px;
  }

  & div {
    z-index: 999;
    height: 9px;
    width: 43px;
    background-color: #ff4444;
    margin-top: -22px;
  }
`;

export default MovieStyle;
