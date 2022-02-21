import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, ToastContent, ToastHeader } from './style';
import CloseIcon from '../CloseIcon';
import ToastIcon from '../ToastIcon';

Toast.propTypes = {
  status: PropTypes.oneOf(['warning', 'info', 'success', 'error']).isRequired,
  header: PropTypes.string,
  content: PropTypes.string,
  onDismiss: PropTypes.func,
  duration: PropTypes.number,
  background: PropTypes.string,
  animation: PropTypes.oneOf([
    'appears_in_right',
    'appears_in_left',
    'appears_in_top',
    'appears_in_bottom',
    'zoom_in',
  ]),
};

function Toast({
  status = 'warning',
  header = 'Toast header',
  content = 'You need use the props',
  duration = 3000,
  background,
  onDismiss,
  animation = 'appears_in_right',
}) {
  useEffect(() => {
    setTimeout(() => {
      onDismiss();
    }, duration);
  }, []);

  return (
    <ToastContainer
      status={status}
      background={background}
      animation={animation}
    >
      <ToastIcon status={status} />
      <div>
        <ToastHeader status={status}>{header}</ToastHeader>
        <ToastContent status={status}>
          {content}
        </ToastContent>
      </div>
      <CloseIcon status={status} onDismiss={onDismiss} />
    </ToastContainer>
  );
}

export default Toast;
