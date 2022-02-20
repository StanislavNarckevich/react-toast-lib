import React from 'react';
import styled, {keyframes} from 'styled-components';
import {
  BsQuestionCircle, IoWarningOutline, VscChromeClose, VscError, VscPass,
} from 'react-icons/all';

const statusIcon = {
  info: <BsQuestionCircle size={40} color="white"/>,
  success: <VscPass size={40} color="white"/>,
  warning: <IoWarningOutline size={40}/>,
  error: <VscError size={40} color="white"/>,
};

const containerBackgrounds = {
  info: '#9A40D3',
  success: '#37E29A',
  warning: '#F4E048',
  error: '#E25837',
};

const appears_in_right = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const appears_in_left = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const appears_in_top = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const appears_in_bottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const zoom_in = keyframes`
  from {
    transform: scale(0.1);
    opacity: 0;
    }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const animations = {
  appears_in_right,
  appears_in_left,
  appears_in_top,
  appears_in_bottom,
  zoom_in
}

const ToastContainer = styled.div`
  width: 360px;
  border-radius: 15px;
  height: 125px;
  background-color: ${(props) => containerBackgrounds[props.status]};
  background-color: ${(props) => props.background};
   position: relative;
  // top: ${(props) => props.positionY === 'top' && props.indent + 'px'};
  // bottom: ${(props) => props.positionY === 'bottom' && props.indent + 'px'};
  // left: ${(props) => props.positionX === 'left' && props.indent + 'px'};
  // right: ${(props) => props.positionX === 'right' && props.indent + 'px'};
  display: flex;
  //align-items: center;
  animation: ${(props)=> animations[props.animation]} .5s ease;
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

const CloseIcon = function ({status, onDismiss}) {
  const Icon = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  `;

  return <Icon onClick={onDismiss}>
    <VscChromeClose size={25} color={status === 'warning' ? 'black' : 'white'}/>
  </Icon>
}

const ToastIcon = function ({status}) {
  const Icon = styled.div`
    margin: 20px;
    align-self: center;
  `;

  return (
    <Icon>
      {statusIcon[status]}
    </Icon>
  );
};

export {
  ToastContainer, CloseIcon, ToastContent, ToastIcon, ToastHeader
};
