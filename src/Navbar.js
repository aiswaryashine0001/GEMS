import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import { FaUser } from 'react-icons/fa'; // Import the user icon from react-icons
import SearchBar from './SearchBar'; // Import the SearchBar component

const Navbar = ({ setSearchQuery, applyFilter, searchTerm, handleSearchChange }) => {
    const handleFilter = (filter) => {
        applyFilter(filter === 'all' ? null : filter);
    };

    return ( 
        <nav className="nav">
            <a href="/" className="site-title">
                Site Name
            </a>
            <SearchBar value={searchTerm} onChange={handleSearchChange} setSearchQuery={setSearchQuery} /> {/* Render the SearchBar component */}
            <div className="profile-icon">
                <FaUser /> {/* Profile icon */}
            </div>
        </nav>
     );
}
 
export default Navbar;
