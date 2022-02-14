import React from 'react';
import PropTypes from 'prop-types';
import {
  ToastContainer, CloseIcon, ToastIcon, ToastContent,
} from './style';

Toast.propTypes = {
  status: PropTypes.oneOf(['warning', 'info', 'success', 'error']).isRequired,
  content: PropTypes.string,
};

function Toast({ status = 'warning', content = 'You need use the props' }) {
  return (
    <ToastContainer status={status}>
      <ToastIcon status={status} />
      <ToastContent status={status}>
        {content}
      </ToastContent>
      <CloseIcon status={status}/>
    </ToastContainer>
  );
}

export default Toast;
