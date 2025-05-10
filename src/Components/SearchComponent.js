import React, { useState } from 'react';
import useDebounce from './useDebounce';
import { useEffect } from 'react';
const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  
  useEffect(() => {
    if (debouncedSearchTerm) {
      
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div style={{textAlign:"center"}}>
        <h1>Task6</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Debounced value: {debouncedSearchTerm}</p>
    </div>
  );
};

export default SearchComponent;