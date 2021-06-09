import { useState, useCallback } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(-10);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count])
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrement1 = useCallback(() => {
    setCount1(count1 - 1);
  }, [count1]);
  const increment1 = useCallback(() => {
    setCount1(count1 + 1)
  }, [count1]);
  return {
    count,
    decrement,
    increment,
    count1,
    decrement1,
    increment1,
  };
}

export default useCounter;
