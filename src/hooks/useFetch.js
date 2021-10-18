import { useState, useEffect } from 'react';

  const useFetch = (initialUrl, callback) => {
    const [data, setData] = useState();
    const [url, setUrl] = useState(initialUrl);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    let lastRequest;
    let mounted = true;

    useEffect(() => {
      const fetchData = async () => {
        setUrl(initialUrl);
        setLoading(true);
        try {
          const currentRequest = fetch(url);
          lastRequest = currentRequest;
          const response = await currentRequest;
          if (lastRequest === currentRequest && mounted) {            
            let json = await response.json()
            setLoading(false) 
            setData(json)
            callback(json)
          }
        } 
        catch (error) {
          setLoading(false);
          setError(error);
        }
      };
      fetchData();
      return () => {
        mounted = false;
      };
    }, [url]);
    return { data, loading, error };
  }; 

export default useFetch