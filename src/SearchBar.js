import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from Font Awesome

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search videos..."
        value={value}
        onChange={onChange}
        className="search-input"
      />
      <FaSearch className="search-icon" /> {/* Add the search icon */}
    </div>
  );
};

export default SearchBar;
