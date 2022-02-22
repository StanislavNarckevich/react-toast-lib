import React, {useReducer} from 'react';
import Toast from '../components/Toast/Toast';
import {ADD_TOAST, DELETE_TOAST} from "../constants";
import {v4 as uuidv4} from "uuid";
import ToastList from "../components/ToastList";
import {toastListReducer} from "../toastListReducer";
import {Button} from "../style";

const buttons = [
  {
    status: 'success',
    content: 'Success toast'
  },
  {
    status: 'info',
    content: 'Info toast'
  },
  {
    status: 'warning',
    content: 'Warning toast'
  },
  {
    status: 'error',
    content: 'Error toast'
  },
];

export default {
  title: 'Multi Toast ',
  component: Toast,
};

function Template(args) {
  const [toastList, dispatch] = useReducer(toastListReducer, []);

  const showToast = (status, content, args) => {
    dispatch({
      type: ADD_TOAST,
      payload: {
        id: uuidv4(),
        status,
        content,
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
       {buttons.map((button)=> {
        return <Button status={button.status} onClick={() => {
          showToast(button.status,  button.content, args);
        }}
        >
          Show {button.status} toast
        </Button>
      })}

      <ToastList
        {...args}
        toastList={toastList}
        onDismiss={closeToast}
      />
    </>
  );
}

export const MultiToast = Template.bind({});

MultiToast.args = {
  positionX: "right",
  positionY: "top",
  indent: 20,
  header: 'Toast header',
  duration: 2000,
  animation: 'zoom_in',
};