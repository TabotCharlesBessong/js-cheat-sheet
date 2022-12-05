import { createStore } from 'redux'
// Reducer
const counter = (state = { value: 0 }, action)=> {
  switch (action.type) {
  case 'INCREMENT':
    return { value: state.value + 1 }
  case 'DECREMENT':
    return { value: state.value - 1 }
  default:
    return state
  }
}
// const store = createStore(counter)
// Optional - you can pass `initialState` as a second arg
const store = createStore(counter, { value: 0 })
