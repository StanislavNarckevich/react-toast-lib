import { keyframes } from 'styled-components';

const appears_in_right = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const appears_in_left = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const appears_in_top = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const appears_in_bottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const zoom_in = keyframes`
  from {
    transform: scale(0.1);
    opacity: 0;
    }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const animations = {
  appears_in_right,
  appears_in_left,
  appears_in_top,
  appears_in_bottom,
  zoom_in,
};
