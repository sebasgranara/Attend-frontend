import React from 'react';

function SearchBar({ handleInput }) {
  const handleValue = (e) => {
    handleInput(e.target.value);
  };

  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={handleValue} />
    </div>
  );
}
export default SearchBar;