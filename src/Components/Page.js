import React, { useState } from 'react';
import useTitle from './useTitle';

const Page = () => {
  const [count, setCount] = useState(0);
  
 
  useTitle(`Clicked ${count} times`);

  return (
    <div style={{textAlign:"center"}}>
        <h1>Task9</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me ({count})
      </button>
      <p>Watch the browser tab title update!</p>
    </div>
  );
};

export default Page;