import React from 'react';

const Sort = ({ onChange, sortOrder, sortBy }) => {
  const handleSortChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="sort">
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={handleSortChange} value={sortBy}>
      <option value="date">Newest First</option>
      <option value="date">Oldest First</option>
        {/* Add more options if needed */}
      </select>
      <span className={`sort-order ${sortOrder === 'asc' ? 'asc' : 'desc'}`}>
        {sortOrder === 'asc' ? 'Asc' : 'Desc'}
      </span>
    </div>
  );
};

export default Sort;