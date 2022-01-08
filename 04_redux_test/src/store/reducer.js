export default function reducer(state=defaultState, action){
  switch(action.type){
    case "INCREMENT" : return {...state, count: state.count+1}
    case "ADD_NUM" : return {...state, count: state.count+action.num}
    case "DECREMENT" : return {...state, count: state.count-1}
    case "SUB_NUM" : return {...state, count: state.count-action.num}
    default: return {...state}
  }
}

const defaultState = {
  count:0
}