import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './App.css';
import VideoList from './Videolist';
import useVideos from './useVideos';
import Any from './pages/any';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  const { videos, error } = useVideos();

  if (error) {
    return <div>Error: {error}</div>;
  }

  let Component = null;
  switch (window.location.pathname) {
    case "/":
      Component = App;
      break;
    case "/any":
      Component = Any;
      break;
    default:
      // Handle other paths if needed
  }

  return (
    <div className="App">
      <Navbar />
      {loading ? (
        <div className="loader">
          <ClipLoader color="#36D7B7" loading={loading} size={30} />
        </div>
      ) : (
        <Component />
      )}
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
