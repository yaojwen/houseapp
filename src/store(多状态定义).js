import { createStore, combineReducers } from 'redux'


//combineReducers把小的reducer合并成一个大的reducer
function name(state = '张三', action) {
    switch (action.type) {
        default: return state
    }
}

function age(state = 20, action) {
    switch (action.type) {
        default: return state
    }
}

function sex(state = '女', action) {
    switch (action.type) {
        default: return state
    }
}
function index(state = 1, action) {
    switch (action.type) {
        case 'changeIndex': return 22
        default: return state
    }
}

var store = createStore(combineReducers({
    name,
    age,
    sex,
    index
}))


// var store = createStore(function(state = {
//     name: '',
//     age: '',
//     sex: 0,
//     index: 0
// }, action){
//     switch(action.type){
//         case 'changenum': return state + action.num
//         default: return state
//     }
// })


console.log(store.getState())

export default store