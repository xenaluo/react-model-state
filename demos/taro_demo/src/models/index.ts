import counter, { deps as counter_deps } from './counter'
import counter1 from './counter1'

import { createModels } from 'react-model-state'


export default createModels([
  {
    namespace: 'counter', hook: counter, deps: counter_deps
  },
  {
    namespace: 'counter1', hook: counter1
  },


])
