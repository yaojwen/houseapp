import { createStore, combineReducers } from 'redux'

//测试值
function test(state = '张三', action){
    switch(action.type){
        case 'changetest': return action.newname
        default: return state
    }
}

//点击的历史记录
function historyArr(state = [], action){
    switch(action.type){
        case 'addHistoryList': 
            //先删除老数据
            // for(let i = 0; i < state.length; i++){
            //     if(state[i].name == action.obj.name){
            //         state.splice(i,1)
            //         break
            //     }
            // }

            //在吧点击数据置顶
            return [action.obj, ...state.filter(obj => obj.name != action.obj.name)]

        default: return state
    }
}


export default createStore(combineReducers({
    test,
    historyArr
}))