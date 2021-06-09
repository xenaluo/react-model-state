import { View, Text, Button } from '@tarojs/components'
import { useModel } from 'react-model-state'

const Counter = () => {
  console.log('Counter')
  const { count, increment, decrement } = useModel('counter', (model) => {
    return {
      count: model.count,
      decrement: model.decrement,
      increment: model.increment,
    }
  });

  return (
    <View className='index'>
      <Text>count: {count}</Text>
      <Button onClick={increment}>test +</Button>
      <Button onClick={decrement}>test -</Button>
    </View>
  )
}

export default Counter
