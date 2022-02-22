import React from 'react';
import PropTypes from "prop-types";
import { VscChromeClose } from 'react-icons/all';
import {Icon} from "./style";

function CloseIcon({ status, onDismiss }) {
  return (
    <Icon onClick={onDismiss}>
      <VscChromeClose size={25} color={status === 'warning' ? 'black' : 'white'} />
    </Icon>
  );
}

CloseIcon.propTypes = {
  status: PropTypes.string,
  onDismiss: PropTypes.func
}

export default CloseIcon;
