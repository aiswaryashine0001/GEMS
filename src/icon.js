import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Icon.css'; // Import CSS file for styling

const Icon = ({ handleFilter }) => {
  return (
    <div className="filter-icons">
      <div className="filter-icon" onClick={() => handleFilter('All')}>
        <div className="icon-box">All</div>
      </div>
      <div className="filter-icon" onClick={() => handleFilter('gaming')}>
        <div className="icon-box">Gaming</div>
      </div>
      <div className="filter-icon" onClick={() => handleFilter('music')}>
        <div className="icon-box">Music</div>
      </div>
      <div className="filter-icon" onClick={() => handleFilter('tech')}>
        <div className="icon-box">Tech</div>
      </div>
    </div>
  );
};

export default Icon;
