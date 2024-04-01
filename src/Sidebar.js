import React, { useState } from 'react';
import './Sidebar.css'; // Import CSS file for styling

const Sidebar = () => {
  // State to manage the visibility of the sidebar on smaller screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Set initial state to open

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div>
      <button className="toggle-button" onClick={toggleSidebar}>
        &#9776; {/* Unicode character for hamburger menu */}
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">&#x1F3E0; Home</a></li>
          <li><a href="/">&#x1F50D; Explore</a></li>
          <li><a href="/">&#x1F4DA; Library</a></li>
          <li><a href="/">&#x23F3; History</a></li>
          <li><a href="/">&#x2699; Settings</a></li>
          <li><a href="/">&#x1F4C1; Report History</a></li>
          <li><a href="/">&#x2753; Help</a></li>
          <li><a href="/">&#x1F4AC; Send Feedback</a></li>
          <li><a href="/">&#x1F4F0; Subscriptions</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
