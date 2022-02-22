import React from 'react';
import styled  from 'styled-components';
import {animations} from "../../animations";
import {containerBackgrounds} from "../../constants";


const ToastContainer = styled.div.attrs(props => ({
  id: "toast"
}))`
  width: 360px;
  border-radius: 15px;
  height: 125px;
  background-color: ${(props) => containerBackgrounds[props.status]};
  background-color: ${(props) => props.background};
  position: relative;
  display: flex;
  animation: ${(props) => animations[props.animation]} .5s ease;
  margin: 20px 0;
`;

const ToastContent = styled.span.attrs(props => ({
  id: "toast_content"
}))`
  font-size: 20px;
  color: ${(props) => (props.status === 'warning' ? '#000' : '#fff')};
`;

const ToastHeader = styled.p.attrs(props => ({
  id: "toast_header"
}))`
  font-size: 26px;
  color: ${(props) => (props.status === 'warning' ? '#000' : '#fff')};
  margin-bottom: 15px;
`;

export {
  ToastContainer, ToastContent, ToastHeader,
};
