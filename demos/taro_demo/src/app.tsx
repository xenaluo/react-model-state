import { Provider } from 'react-model-state'
import createModels from './models'


import './app.less'

const App = (props) => {
  const models = createModels()
  console.log('models', models)

  return (<Provider models={models}>
    {props.children}
  </Provider>)
}

export default App
