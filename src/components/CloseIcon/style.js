import styled from "styled-components";

export const Icon = styled.div.attrs(props => ({
  id: "close_icon"
}))`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  `;