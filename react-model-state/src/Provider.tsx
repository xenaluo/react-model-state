import React from 'react'
import Dispatcher from './assist/dispatcher'
import ModelContext from './assist/Context';
import Enclosure from './assist/Enclosure'

const { Provider } = ModelContext

const dispatcher = new Dispatcher();

interface ProviderProps {
  models: { [namespace: string]: any }
  children: React.ReactNode
}

export default (props: ProviderProps) => {
  const { models } = props;

  return <Provider value={dispatcher}>
    {Object.keys(models).map(namespace => {
      return (
        <Enclosure
          key={namespace} namespace={namespace}
          hook={models[namespace]}
          updater={(val) => {
            dispatcher.datas[namespace] = val;
            dispatcher.update(namespace)
          }}
        />
      )
    })}
    {props.children}
  </Provider>
}

