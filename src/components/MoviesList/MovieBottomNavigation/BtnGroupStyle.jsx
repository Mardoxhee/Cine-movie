import styled from "styled-components";

const BtnGroupStyle = styled.ul`
  display: flex;

  & a {
    border-radius: 5px;
    border: solid 2px black;
    text-decoration: none;
    padding: 10px;
    margin: 30px 10px;
    color: #ff4444;
    &:hover {
      border: solid 2px #ff4444;
      color: white;
      background-color: #ff4444;
    }
  }
`;
export default BtnGroupStyle;
