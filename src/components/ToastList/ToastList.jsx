import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ToastListContainer } from './style';
import Toast from '../Toast';
import ErrorBoundary from '../ErrorBoundary';

const body = document.querySelector('body');

function ToastList({
  toastList,
  onDismiss,
  positionX,
  positionY,
  indent,
}) {
  if (!toastList.length) {
    return null;
  }

  return (
    ReactDOM.createPortal(
      <ErrorBoundary>
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
      </ErrorBoundary>,
      body,
    )
  );
}

ToastList.propTypes = {
  toastList: PropTypes.arrayOf(PropTypes.object),
  positionX: PropTypes.oneOf(['left', 'right']),
  positionY: PropTypes.oneOf(['top', 'bottom']),
  indent: PropTypes.number,
  onDismiss: PropTypes.func,
};

ToastList.defaultProps = {
  positionX: 'right',
  positionY: 'bottom',
  indent: 20,
};

export default ToastList;
