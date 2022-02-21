import React from 'react';
import styled  from 'styled-components';
import {animations} from "./animations";

const containerBackgrounds = {
  info: '#9A40D3',
  success: '#37E29A',
  warning: '#F4E048',
  error: '#E25837',
};

const ToastContainer = styled.div`
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

const ToastContent = styled.span`
  font-size: 20px;
  color: ${(props) => (props.status === 'warning' ? '#000' : '#fff')};
`;

const ToastHeader = styled.p`
  font-size: 26px;
  color: ${(props) => (props.status === 'warning' ? '#000' : '#fff')};
  margin-bottom: 15px;
`;

// const CloseIcon = function ({ status }) {
//   const Icon = styled.div`
//     position: absolute;
//     right: 10px;
//     top: 10px;
//     cursor: pointer;
//   `;
//
//   return (
//     <Icon>
//       <VscChromeClose size={25} color={status === 'warning' ? 'black' : 'white'} />
//     </Icon>
//   );
// };

// const ToastIcon = function ({ status }) {
//   const Icon = styled.div`
//     margin: 20px;
//     align-self: center;
//   `;
//
//   return (
//     <Icon>
//       {statusIcon[status]}
//     </Icon>
//   );
// };

export {
  ToastContainer, ToastContent, ToastHeader,
};
