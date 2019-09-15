import { createStore, combineReducers } from 'redux'

function test(state = 'test', action){
    switch(action.type){
        default: return state
    }
}

function historyarr(state = [], action){
    switch(action.type){
        default: return state
    }
}

//combineReducers 把N个小的reducer合并成一个大的reducer,用来定义多个状态
export default createStore(combineReducers({
    test,
    historyarr
}))