import { Provider } from 'react-model-state'
import models from './models'


import './app.less'

const App = (props) => {
  console.log('models', models)

  return (<Provider models={models}>
    {props.children}
  </Provider>)
}

export default App
