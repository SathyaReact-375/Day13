import React, { useState } from 'react';
import usePrevious from './usePrevious';

const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div style={{textAlign:"center"}}>
         <h1>Task7</h1>
      <h1>Current: {count}</h1>
      <h2>Previous: {prevCount}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {prevCount !== undefined && (
        <p>Difference: {count - prevCount}</p>
      )}
    </div>
  );
};

export default Counter;