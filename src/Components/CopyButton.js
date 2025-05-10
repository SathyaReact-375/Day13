import React from 'react';
import useClipboard from './useClipboard';

const CopyButton = () => {
  const { copy, isCopied } = useClipboard();
  const textToCopy = 'Hello, world!';

  return (
    <div style={{textAlign:"center"}}>
        <h1>Task11</h1>
      <button onClick={() => copy(textToCopy)}>
        {isCopied ? 'Copied!' : 'Copy Text'}
      </button>
      <p>Try pasting after clicking: "{textToCopy}"</p>
    </div>
  );
};

export default CopyButton;