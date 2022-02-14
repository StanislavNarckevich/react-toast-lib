import React from 'react';
import Toast from './Toast';

export default {
  title: 'Toast',
  component: Toast,
};

function Template(args) {
  return <Toast {...args} />;
}

export const Default = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});
export const Error = Template.bind({});

Success.args = {
  content: 'Example toast',
  status: 'success',
};

Warning.args = {
  content: 'Example toast',
  status: 'warning',
};

Info.args = {
  content: 'Example toast',
  status: 'info',
};

Error.args = {
  content: 'Example toast',
  status: 'error',
};
