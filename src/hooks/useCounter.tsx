import { useState, useCallback } from 'react';

const useCounter = (initialValue: number) => {
  const [count, setCount] = useState(0 || initialValue);
  const increment = (value: number = 1) => useCallback(() => setCount((x) => x + value), []);

  return { count, setCount, increment };
};

export default useCounter;
