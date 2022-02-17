import React, {useState} from 'react';
import Toast from './Toast';

export default {
  title: 'Toast',
  component: Toast,
};

function Template(args) {
  const [isActiveToast, setActiveToast] = useState(false);

  const showToast = ()=> {
    setActiveToast(true);
  };

  const closeToast = () => {
    setActiveToast(false);
  }

  return (
    <>
    <button onClick={showToast}>show toast</button>
    <Toast active={isActiveToast} {...args} onDismiss={closeToast}/>
  </>
  );

}

export const Default = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});
export const Error = Template.bind({});

Success.args = {
  content: 'Success toast',
  status: 'success',
  duration: 2000,
  positionX: 'left',
  positionY: 'top'
};

Warning.args = {
  content: 'Warning toast',
  status: 'warning',
  duration: 2000,
  position: {
    top: 50,
    right:50
  }
};

Info.args = {
  content: 'Info toast',
  status: 'info',
  duration: 2000,
  position: {
    bottom: 50,
    left:50
  }
};

Error.args = {
  content: 'Error toast',
  status: 'error',
  duration: 2000,
  position: {
    top: 50,
    left:50
  }
};
