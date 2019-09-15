import { createStore } from 'redux'
//yarn add react-redux redux -S
//1. 创建状态仓库
//state: 当前store存放的所有值
//action: 本次通知对象
var store = createStore(function(state = '张三', action){
    switch(action.type){
        case 'changename': return action.name
        
        default: return state
    }
})

//action：通知，发出通知就是改变store状态的唯一方式
//发出一个通知就会触发reducer函数，从而改变store内的状态
let a = {
    type: 'changename',    //表示的是本次通知的类型
    name: '赵柳'
}
//发出通知
store.dispatch(a)

console.log(store.getState())
export default store