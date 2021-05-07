import styled from "styled-components";

const NavigationListStyled = styled.ul`
  display: flex;
  color: black;
  a {
    text-decoration: none;
    list-style: none;
    color: black;
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    &:hover {
      background-color: #ff4444;
      color: white;
    }
  }
`;

export default NavigationListStyled;
