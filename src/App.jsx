import React, {useState} from 'react';
import Toast from './components/Toast';

export default function App() {

  const [isActiveToast, setActiveToast] = useState(false);

  const showToast = () => {
    setActiveToast(true);
  };

  const closeToast = () => {
    setActiveToast(false);
  }

  return (
    <>
      <button onClick={showToast}>show toast</button>
      <Toast active={isActiveToast} status="success" content="Example toast" onDismiss={closeToast}
             position={{top: 50, left: 50}} duration={3000}/>
    </>
  );

}
