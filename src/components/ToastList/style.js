import styled from 'styled-components';

export const ToastListContainer = styled.div.attrs(props => ({
  id: "toast-list_container"
}))`
  margin: -20px 0;
  position: fixed;
  top: ${(props) => props.positionY === 'top' && `${props.indent}px`};
  bottom: ${(props) => props.positionY === 'bottom' && `${props.indent}px`};
  left: ${(props) => props.positionX === 'left' && `${props.indent}px`};
  right: ${(props) => props.positionX === 'right' && `${props.indent}px`};
`;
