import styled from 'styled-components';
import { VscChromeClose } from 'react-icons/all';
import React from 'react';

const Icon = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  `;

const CloseIcon = function ({ status, onDismiss }) {
  return (
    <Icon onClick={onDismiss}>
      <VscChromeClose size={25} color={status === 'warning' ? 'black' : 'white'} />
    </Icon>
  );
};

export default CloseIcon;
