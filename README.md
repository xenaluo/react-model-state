# react-model-state

## - 轻量级的 React 状态管理工具

## 特性
  - **轻量级**，基于 Context + React hooks 实现
  - 支持从model中取部分数据及方法，且只在所取值变化是进行重新渲染
  
## 安装

```bash
$ npm install react-model-state --save-dev
# or
$ yarn add react-model-state
```

## API
### useModel
```jsx
import { useModel } from 'react-model-state'

/**
 * @param namespace —— models/inde.js 中注册的名字
 * @param filter —— filter 函数接收一个参数为对应 namespace 的 model 数据
 *                         可自定义 model 的取值，且只根据取值重新渲染
 */
const model = useModel(namespace, filter)
```



## 运行 demo
```bash
$ yarn
$ yarn dev:taro_demo
```

## 注册使用示例
### 注册models
```bash
# 添加 models 文件夹
.
└-- src
    └-- models      
        |-- counter.js
        └-- index.js       
```
```js
// src/models/model.js
function useCounter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(-10);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count])
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrement1 = useCallback(() => {
    setCount1(count1 - 1);
  }, [count1]);
  const increment1 = useCallback(() => {
    setCount1(count1 + 1)
  }, [count1]);
  return {
    count,
    decrement,
    increment,
    count1,
    decrement1,
    increment1,
  };
}
export default useCounter;
```
```js
// src/models/index.js
import counter from './counter'
// ...

const createModels = () => {
  return {
    counter,
    // ...
  }
}

export default createModels
```

```jsx
// 入口文件 
// eg: taro - app.tsx
import { Provider } from 'react-model-state'
import createModels from './models'

const App = (props) => {
  const models = createModels()

  return (<Provider models={models}>
    {props.children}
  </Provider>)
}

export default App
```

### 使用方法
```jsx
import { useModel } from 'react-model-state'

// ...
const { count, increment, decrement } = useModel('counter', (model) => {
  return {
    count: model.count,
    decrement: model.decrement,
    increment: model.increment,
  }
});

// ...


```

