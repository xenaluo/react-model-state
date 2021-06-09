import { View, Text, Button, Navigator } from '@tarojs/components'
import { useModel } from 'react-model-state'
import './index.less'

const Index = () => {
  // const { count } = useModel('counter', (model) => ({
  //   count: model.count
  // }));
  // const { count, increment, decrement } = counter;

  // const testInc = () => {
  //   increment()
  // }
  // const testDec = () => {
  //   decrement()
  // }


  return (
    <View className='index'>
      {/* <Text>count: {count}</Text> */}
      {/* <Button onClick={testInc}>test +</Button>
      <Button onClick={testDec}>test -</Button>
      <View style={{marginTop: '20px'}} /> */}
      <Navigator url='/pages/index/index'>To Home</Navigator>
    </View>
  )
}

export default Index
