import { useState, useCallback } from 'react';

const useCounter = (initialValue: number) => {
  const [count, setCount] = useState(0 || initialValue);
  const increment = useCallback(() => setCount((x) => x + 1), []);

  return { count, setCount, increment };
};

export default useCounter;
