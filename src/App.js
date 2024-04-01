import React, { useEffect, useState } from 'react';
import './App.css'; // Import CSS file for styling
import Navbar from './Navbar';
import Icon from './icon'; // Import the Icon component
import Sidebar from './Sidebar';
import useVideos from './useVideos';
import Loader from './Loader';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const { videos, loading, error } = useVideos(searchQuery);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to apply filter
  const applyFilter = (category) => {
    if (category === 'All') {
      // If 'All' category is selected, set filteredVideos to all videos
      setFilteredVideos(videos);
    } else {
      // Filter videos based on category
      const filtered = videos.filter(video => video.category === category);
      setFilteredVideos(filtered);
    }
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // Filter videos based on search term
    const filteredVideosFromSearch = videos.filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(filteredVideosFromSearch);
  }, [searchTerm, videos]); // Dependency array includes searchTerm and videos

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <Navbar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <Icon handleFilter={applyFilter} /> {/* Render the Icon component with the handleFilter prop */}
      <Sidebar />
      {loading ? (
        <Loader />
      ) : (
        <div className="main-content">
          <div className="video-list">
            {filteredVideos.map(video => (
              <div className="video-item" key={video.id}>
                <div className="video-content">
                  <img className="thumbnail" src={video.thumbnail} alt={video.title} />
                </div>
                <div className="video-details">
                  <h2>{video.title}</h2>
                  <p>{video.description}</p>
                  <p>{video.channelName}</p>
                  <p>Views: {video.views}</p>
                  <img className="pic" src={video.channelPicture} alt={video.channelName} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
