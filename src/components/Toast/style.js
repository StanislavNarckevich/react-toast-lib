import styled from 'styled-components';

const containerBackgrounds = {
  info: '#9A40D3',
  success: '#37E29A',
  warning: '#F4E048',
  error: '#E25837',
};

const ToastContainer = styled.div`
  width: 360px;
  border-radius: 15px;
  height: 125px;
  background-color: ${(props) => containerBackgrounds[props.status]};
  position: relative;
  display: flex;
  align-items: center;
  
  `;

const ToastContent = styled.span`
  font-size: 24px;
  color: ${(props) => (props.status === 'warning' ? '#000' : '#fff')};
`;

const ToastIcon = styled.div`
  margin: 20px;
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export {
  ToastContainer, CloseIcon, ToastContent, ToastIcon,
};
