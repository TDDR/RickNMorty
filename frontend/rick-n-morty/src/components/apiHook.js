import { useState, useEffect } from 'react';

const useServer = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Server response not OK');
        }
        const resJSON = await response.json();
        setData(resJSON);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  return { data, error };
};

export default useServer;