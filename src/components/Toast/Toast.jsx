import React from 'react';
import {
  VscChromeClose, BsQuestionCircle, IoWarningOutline, VscError, VscPass,
} from 'react-icons/all';
import {
  ToastContainer, CloseIcon, ToastIcon, ToastContent,
} from './style';

const statusIcon = {
  info: <BsQuestionCircle size={40} color="white" />,
  success: <VscPass size={40} color="white" />,
  warning: <IoWarningOutline size={40} />,
  error: <VscError size={40} color="white" />,
};

function Toast({ status, content }) {
  return (
    <ToastContainer status={status}>
      <ToastIcon>
        {statusIcon[status]}
      </ToastIcon>
      <ToastContent status={status}>
        {content}
      </ToastContent>
      <CloseIcon>
        <VscChromeClose size={25} color={status === 'warning' ? 'black' : 'white'} />
      </CloseIcon>
    </ToastContainer>
  );
}

export default Toast;
