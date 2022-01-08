const redux = require('redux');

const defaultState = {
  count:1
}
function reducer(state=defaultState, action){
  switch(action.type){
    case "INCREMENT" : return {...state, count: state.count+1}
    case "ADD_NUM" : return {...state, count: state.count+action.num}
    case "DECREMENT" : return {...state, count: state.count-1}
    case "SUB_NUM" : return {...state, count: state.count-action.num}
    default: return {...state}
  }
}

const store = redux.createStore(reducer)

store.subscribe(()=>{
  console.log("count", store.getState().count);
})

const action1 = { type: "INCREMENT" };
const action2 = { type: "DECREMENT" };

const action3 = { type: "ADD_NUM", num: 5 };
const action4 = { type: "SUB_NUM", num: 12 };

// 派发action
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);
