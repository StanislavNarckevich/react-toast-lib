import React from 'react';
import PropTypes from 'prop-types';
import { ToastListContainer } from './style';
import Toast from '../Toast';

ToastList.propTypes = {
  toastList: PropTypes.array,
  positionX: PropTypes.oneOf(['left', 'right']),
  positionY: PropTypes.oneOf(['top', 'bottom']),
  indent: PropTypes.number,
  onDismiss: PropTypes.func,
  };

function ToastList({
  toastList, onDismiss, positionX = 'right',
  positionY = 'bottom',
  indent = 20,
}) {
  return (
    toastList.length ? (
      <ToastListContainer
        positionX={positionX}
        positionY={positionY}
        indent={indent}
      >
        {
          toastList.map((toast) => (
            <Toast
              {...toast}
              onDismiss={() => onDismiss(toast.id)}
              key={toast.id}
            />
          ))
        }
      </ToastListContainer>
    ) : null
  );
}

export default ToastList;
