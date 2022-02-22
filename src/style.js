import styled from "styled-components";
import {containerBackgrounds} from "./constants";

export const Button = styled.button`
  display: block;
  margin: 20px 0;
  background-color: ${(props) => containerBackgrounds[props.status]};
  padding: 20px;
  width: 15rem;
  font-size: 20px;
  border-radius: 40px;
  font-family: "Roboto", sans-serif;
  border: none;
  cursor: pointer;
  transition: 0.1s ease;

  &:active{
    transform: scale(1.035);
  }
`