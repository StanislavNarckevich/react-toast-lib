import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastList from './components/ToastList';
import {ADD_TOAST, DELETE_TOAST} from "./constants";

export default function App() {
  const [toastList, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ADD_TOAST:
        return [...state, action.payload];
      case DELETE_TOAST:
        return state.filter((toast) => toast.id !== action.payload);
      default:
        return state;
    }
  }, []);

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
    console.log('close');

    dispatch({
      type: DELETE_TOAST, payload: id,
    });
  };

  return (
    <>
      <button onClick={() => {
        showToast('success', 'Toast Header', `Example toast ${new Date()}`, 50000, 'zoom_in');
      }}
      >
        Show toast
      </button>

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
