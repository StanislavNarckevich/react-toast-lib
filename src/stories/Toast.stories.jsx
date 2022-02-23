import React, {useReducer} from 'react';
import Toast from '../components/Toast/Toast';
import {ADD_TOAST, DELETE_TOAST} from "../constants";
import {v4 as uuidv4} from "uuid";
import ToastList from "../components/ToastList";
import {toastListReducer} from "../toastListReducer";
import {Button} from "../components/App/style";

export default {
  title: 'Toast',
  component: Toast,
};

function Template(args) {
  const [toastList, dispatch] = useReducer(toastListReducer, []);

  const showToast = (args) => {
    dispatch({
      type: ADD_TOAST,
      payload: {
        id: uuidv4(),
        ...args
      },
    });
  };

  const closeToast = (id) => {
    dispatch({
      type: DELETE_TOAST, payload: id,
    });
  };

  return (
    <>
      <Button status={args.status} onClick={() => {
        showToast(args);
      }}
      >
        Show {args.status} toast
      </Button>

      <ToastList
        {...args}
        toastList={toastList}
        onDismiss={closeToast}
      />
    </>
  );
}

export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});
export const Error = Template.bind({});
export const Default = Template.bind({});

Success.args = {
  positionX: "right",
  positionY: "top",
  indent: 20,
  content: 'Success toast',
  header: 'Toast header',
  status: 'success',
  duration: 2000,
  animation: 'zoom_in'
};

Warning.args = {
  positionX: "right",
  positionY: "bottom",
  indent: 20,
  content: 'Warning toast',
  header: 'Toast header',
  status: 'warning',
  duration: 2000,
  animation: 'zoom_in'
};

Info.args = {
  positionX: "right",
  positionY: "top",
  indent: 20,
  content: 'Info toast',
  header: 'Toast header',
  status: 'info',
  duration: 2000,
  animation: 'zoom_in'
};

Error.args = {
  positionX: "right",
  positionY: "bottom",
  indent: 20,
  content: 'Error toast',
  header: 'Toast header',
  status: 'error',
  duration: 2000,
  animation: 'zoom_in'
};
