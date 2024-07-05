import React from 'react';
import './Sort.css';
const Sort = ({ onChange, sortOrder, sortBy }) => {
  const handleSortChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="sort_container_value">
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={handleSortChange} value={sortBy}>
      <option value="date">Newest First</option>
      <option value="date">Oldest First</option>
        {/* Add more options if needed */}
      </select>
      
    </div>
  );
};

export default Sort;