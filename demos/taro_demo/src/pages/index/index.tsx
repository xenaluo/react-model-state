import { View, Navigator } from '@tarojs/components'
import Counter from './components/Counter'
import Counter1 from './components/Counter1'
import './index.less'

const Index = () => {

  return (
    <View className='index'>
      <Counter />
      <View style={{ marginTop: '20px' }} />
      <Counter1 />
      <View style={{ marginTop: '20px' }} />
      <Navigator url='/pages/detail/index'>To Detail</Navigator>
    </View>
  )
}

export default Index
