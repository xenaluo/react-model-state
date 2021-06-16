import { useState, useCallback } from 'react';

function useCounter(state) {
  const [count, setCount] = useState(10000);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count])
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return {
    count,
    decrement,
    increment,
  };
}

export default useCounter;
