import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastList from '../ToastList';
import { ADD_TOAST, DELETE_TOAST } from '../../constants';
import { Button } from './style';
import { toastListReducer } from '../../toastListReducer';

const buttons = [
  {
    status: 'success',
    content: 'Success toast',
    id: 'button_success',
  },
  {
    status: 'info',
    content: 'Info toast',
    id: 'button_info',
  },
  {
    status: 'warning',
    content: 'Warning toast',
    id: 'button_warning',
  },
  {
    status: 'error',
    content: 'Error toast',
    id: 'button_error',
  },
];

export default function App() {
  const [toastList, dispatch] = useReducer(toastListReducer, []);

  const showToast = (
    status,
    header,
    content,
    duration,
    animation,
    background,
  ) => {
    dispatch({
      type: ADD_TOAST,
      payload: {
        id: uuidv4(),
        status,
        header,
        content,
        duration,
        animation,
        background,
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
      {buttons.map((button) => (
        <Button
          key={button.id}
          id={button.id}
          status={button.status}
          onClick={() => {
            showToast(button.status, 'Toast Header', button.content, 5000, 'appears_in_top');
          }}
        >
          Show
          {' '}
          {button.status}
          {' '}
          toast
        </Button>
      ))}

      <ToastList
        toastList={toastList}
        onDismiss={closeToast}
        positionX="right"
        positionY="top"
        indent={20}
      />
    </>
  );
}
