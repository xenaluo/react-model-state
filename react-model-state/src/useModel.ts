import { useEffect, useContext, useState, useRef } from 'react'
import ModelContext from './assist/Context'
import Dispatcher from './assist/dispatcher'
import { isEqual } from './assist/helper'


const useModel = (namespace: string, filter?: (val: any) => any) => {
  const modelContext: Dispatcher = useContext(ModelContext) as Dispatcher;
  if (!modelContext.datas[namespace]) {
    throw new Error('error');
  }

  const [state, setState] = useState(filter ? filter(modelContext.datas[namespace]) : modelContext.datas[namespace])
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {

    const updater = (current: any) => {
      if (filter) {
        const currentState = filter(current);
        if (!isEqual(stateRef.current, currentState)) {
          setState(currentState)
          // stateRef.current = currentState
        }

      } else {
        setState(current)
      }
    }

    if (modelContext.callbacks[namespace]) {
      modelContext.callbacks[namespace].push(updater);
    } else {
      modelContext.callbacks[namespace] = [updater]
    }

    return () => {
      modelContext.callbacks[namespace] = [];
    }
  }, [])

  return state
}

export default useModel
