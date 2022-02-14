import React from 'react';
import styled from 'styled-components';
import {
  BsQuestionCircle, IoWarningOutline, VscChromeClose, VscError, VscPass,
} from 'react-icons/all';

const statusIcon = {
  info: <BsQuestionCircle size={40} color="white" />,
  success: <VscPass size={40} color="white" />,
  warning: <IoWarningOutline size={40} />,
  error: <VscError size={40} color="white" />,
};

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
  position: relative;
  display: flex;
  align-items: center;

`;

const ToastContent = styled.span`
  font-size: 24px;
  color: ${(props) => (props.status === 'warning' ? '#000' : '#fff')};
`;

const CloseIcon = function ({status}) {
  const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

  return <Icon>
    <VscChromeClose size={25} color={status === 'warning' ? 'black' : 'white'} />
  </Icon>
}

const ToastIcon = function ({ status }) {
  const Icon = styled.div`
    margin: 20px;
  `;

  return (
    <Icon>
      {statusIcon[status]}
    </Icon>
  );
};

export {
  ToastContainer, CloseIcon, ToastContent, ToastIcon,
};
