import { useState, useCallback } from 'react';
import { useModel } from 'react-model-state'

function useCounter(state) {
  const { count111, decrement111 } = useModel('counter1', (model) => {
    return {
      count111: model.count,
      decrement111: model.decrement
    }
  });
  const [count, setCount] = useState(count111);
  const [count1, setCount1] = useState(-10);
  const decrement = () => {
    decrement111();
  }
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
