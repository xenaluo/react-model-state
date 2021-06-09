import { View, Text, Button } from '@tarojs/components'
import { useModel } from 'react-model-state'

const Counter1 = () => {
  console.log('Counter1')
  const { count1, increment1, decrement1 } = useModel('counter', (model) => ({
    count1: model.count1,
    decrement1: model.decrement1,
    increment1: model.increment1,
  }));

  return (
    <View className='index'>
      <Text>count: {count1}</Text>
      <Button onClick={increment1}>test +</Button>
      <Button onClick={decrement1}>test -</Button>
    </View>
  )
}

export default Counter1
