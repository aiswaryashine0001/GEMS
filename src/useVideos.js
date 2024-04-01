// useVideos.js

import { useState, useEffect } from 'react';

function useVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/public/videos", {
          method: "GET",});
        if (!response.ok) {
          throw new Error('Failed to fetch videos: ' + response.statusText);
        }
        const data = await response.json();
        setVideos(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  return { videos, loading, error };
}

export default useVideos;