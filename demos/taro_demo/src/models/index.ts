import counter from './counter'
import counter1 from './counter1'

// 需手动控制引用顺序
const createModels = () => {
  return {
    counter1: counter1,
    counter: counter,
  }
}

export default createModels
