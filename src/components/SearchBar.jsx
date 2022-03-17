import React from 'react';

function SearchBar({ handleInput }) {

  const handleValue = e => {
    handleInput(e.target.value);
  };

  return (
    <div>
      <input 
        className="searchBar"
        type="text" 
        placeholder="Find events..." 
        onChange={handleValue} />
    </div>
  );
}
export default SearchBar;
