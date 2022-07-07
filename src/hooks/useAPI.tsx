import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';

const useAPI = () => {
  const [data, setData] = useState<{ name: string }>();
  const URL = 'http://localhost:3000';

  useEffect(() => {
    let isMounted = true;
    fetch(URL + '/api')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);
  return data;
};

export default useAPI;
