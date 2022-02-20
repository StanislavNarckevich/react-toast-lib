import React, {useReducer, useState} from 'react';
import {v4 as uuidv4} from "uuid";
import Toast from './components/Toast';
import ToastList from "./components/ToastList/ToastList";

export default function App() {
  // const [isActiveToast, setActiveToast] = useState(false);

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_TOAST":
        return [...state, action.payload];
      case "DELETE_TOAST":
        return state.filter((toast) => toast.id !== action.payload);
      default:
        return state;
    }
  }, []);

  const showToast = (status, header, content, duration, positionX, positionY, indent, background, animation,) => {
    // setActiveToast(true);

    dispatch({
      type: "ADD_TOAST", payload: {
        id: uuidv4(),
        status,
        header,
        content,
        duration,
        background,
        animation,
      }
    })

  };

  const closeToast = (id) => {
    // setActiveToast(false);

    console.log('close');

    dispatch({
      type: "DELETE_TOAST", payload: id,
    })
  }

  // console.log(state)

  return (<>
    <button onClick={() => {
      showToast('success', 'Toast Header', 'Example toast', 5000,  'red', 'zoom_in')
    }}>show toast
    </button>

    <ToastList toastList={state} onDismiss={closeToast} positionX={'right'} positionY={'top'} indent={20}/>
    {/*<Toast active={isActiveToast} status="success" content="Example toast" onDismiss={closeToast}*/}
    {/*       position={{top: 50, left: 50}} duration={3000}/>*/}
  </>);

}
