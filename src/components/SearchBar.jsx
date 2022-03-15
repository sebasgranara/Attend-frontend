import { useState } from 'react';
import React from 'react';

function SearchBar({ handleInput }) {
  const [input, setInput] = useState('');

  const handleValue = e => {
    setInput(e.target.value);
    handleInput(e.target.value);
  };

  return (
    <div>
      <input 
        className="searchBar"
        type="text" 
        value={input} 
        placeholder="Find events..." 
        onChange={handleValue} />
    </div>
  );
}
export default SearchBar;
