import React from "react";
import PropTypes from 'prop-types';
import Toast from "../Toast";
import styled from "styled-components";

ToastList.propTypes = {
  toastList: PropTypes.array,
  positionX: PropTypes.oneOf(['left', 'right']),
  positionY: PropTypes.oneOf(['top', 'bottom']),
  indent: PropTypes.number,
}

const ToastListContainer = styled.div`
  position: fixed;
  top: ${(props) => props.positionY === 'top' && props.indent + 'px'};
  bottom: ${(props) => props.positionY === 'bottom' && props.indent + 'px'};
  left: ${(props) => props.positionX === 'left' && props.indent + 'px'};
  right: ${(props) => props.positionX === 'right' && props.indent + 'px'};
`;

function ToastList({
                     toastList, onDismiss, positionX = 'right',
                     positionY = 'bottom',
                     indent = 20,
                   }) {

  return (
    toastList.length ? <ToastListContainer positionX={positionX}
                                            positionY={positionY}
                                            indent={indent}>
      {toastList.map((toast) => {
        return <Toast {...toast} onDismiss={() => onDismiss(toast.id)} key={toast.id}/>
      })}
    </ToastListContainer> : null
  )
}

export default ToastList;