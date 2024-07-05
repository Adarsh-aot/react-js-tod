import React, { useState } from 'react';
import './Sort.css';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className='form-control-value'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        
      />
      <img src="./src/assets/Icon ionic-ios-search (1) 1 (1).svg" alt="" />
    </div>
  );
};

export default Search;