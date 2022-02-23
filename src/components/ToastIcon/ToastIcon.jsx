import React from 'react';
import PropTypes from 'prop-types';
import {
  BsQuestionCircle, IoWarningOutline, VscError, VscPass,
} from 'react-icons/all';
import { Icon } from './style';

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

ToastIcon.propTypes = {
  status: PropTypes.string,
};

export default ToastIcon;
