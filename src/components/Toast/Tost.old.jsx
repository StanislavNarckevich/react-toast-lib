import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  ToastContainer, CloseIcon, ToastIcon, ToastContent, ToastHeader,
} from './style';

Toast.propTypes = {
  status: PropTypes.oneOf(['warning', 'info', 'success', 'error']).isRequired,
  active: PropTypes.bool.isRequired,
  header: PropTypes.string,
  content: PropTypes.string,
  onDismiss: PropTypes.func,
  duration: PropTypes.number,
  background: PropTypes.string,
  positionX: PropTypes.oneOf(['left', 'right']),
  positionY: PropTypes.oneOf(['top', 'bottom']),
  indent: PropTypes.number,
  animation: PropTypes.oneOf([
    'appears_in_right',
    'appears_in_left',
    'appears_in_top',
    'appears_in_bottom',
    'zoom_in',
  ]),
};

function Toast({
  active = false,
  status = 'warning',
  header = 'Toast header',
  content = 'You need use the props',
  duration = 1000,
  positionX = 'right',
  positionY = 'bottom',
  indent = 20,
  background,
  onDismiss,
  animation = 'appears_in_right',
}) {
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        console.log(5);
        onDismiss();
      }, duration);
    }
  }, [active]);

  alert(uuidv4());

  const toastMarkup = (
    <ToastContainer
      status={status}
      positionX={positionX}
      positionY={positionY}
      indent={indent}
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

  return (active && toastMarkup);
}

export default Toast;
