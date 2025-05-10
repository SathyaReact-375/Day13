import React from 'react';
import useOnlineStatus from './useOnlineStatus';

const NetworkStatus = () => {
  const isOnline = useOnlineStatus();

  return (
    <div style={{
      padding: '20px',
      background: isOnline ? '#e6f7e6' : '#ffebee',
      textAlign:"center",
      border: `2px solid ${isOnline ? 'green' : 'red'}`
    }}>
        <h1>Task13</h1>
      <h2>Network Status: {isOnline ? 'Online' : 'Offline'}</h2>
      <p>
        {isOnline 
          ? 'You are connected to the internet'
          : 'You are offline - check your connection'}
      </p>
    </div>
  );
};

export default NetworkStatus;