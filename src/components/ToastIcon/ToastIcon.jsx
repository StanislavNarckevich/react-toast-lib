import styled from 'styled-components';
import React from 'react';
import {
  BsQuestionCircle, IoWarningOutline, VscError, VscPass,
} from 'react-icons/all';

const Icon = styled.div`
    margin: 20px;
    align-self: center;
`;

const statusIcon = {
  info: <BsQuestionCircle size={40} color="white" />,
  success: <VscPass size={40} color="white" />,
  warning: <IoWarningOutline size={40} />,
  error: <VscError size={40} color="white" />,
};

const ToastIcon = function ({ status }) {
  return (
    <Icon>
      {statusIcon[status]}
    </Icon>
  );
};

export default ToastIcon;
