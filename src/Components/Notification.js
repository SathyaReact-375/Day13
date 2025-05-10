import React, { useState } from 'react';
import useTimeout from './useTimeout';

const Notification = () => {
  const [show, setShow] = useState(false);

 
  useTimeout(() => setShow(true), 3000);

  return (
    <div style={{textAlign:"center"}}>
        <h1>Task10</h1>
      {show ? (
        <div style={{ padding: '20px', background: 'lightgreen' }}>
          This notification appeared after 3 seconds!
        </div>
      ) : (
        <div>Waiting for notification...</div>
      )}
    </div>
  );
};

export default Notification;