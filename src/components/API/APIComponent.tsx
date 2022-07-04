import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';

const APIComponent: React.FunctionComponent = () => {
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
  return <div>{data && <div role='contentinfo'>My name is {data.name}</div>}</div>;
};

export default APIComponent;
