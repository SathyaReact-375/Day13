import React from 'react';
import useHover from './useHover';

const HoverComponent = () => {
  const [isHovered, hoverRef] = useHover();

  return (
    <div
      ref={hoverRef}
      style={{
        padding: '20px',
        backgroundColor: isHovered ? 'lightblue' : 'white',
        border: '1px solid black',
        transition: 'background-color 0.3s ease',
        textAlign:"center"
      }}
    >
        <h1>Task8</h1>
      {isHovered ? 'Hovering!' : 'Hover over me'}
    </div>
  );
};

export default HoverComponent;