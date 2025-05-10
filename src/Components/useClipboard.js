import { useState } from 'react';

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text) => {
    if (!navigator.clipboard) {
      console.error('Clipboard API not available');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      
     
      setTimeout(() => setIsCopied(false), 2000);
      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  };

  return { copy, isCopied };
};

export default useClipboard;