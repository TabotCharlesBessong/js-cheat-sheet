// noop middleware
const logger = store => dispatch => action { dispatch(action) }
const logger = store => {
  // This function runs on createStore().
  // It returns a decorator for dispatch().

  return dispatch => {
    // Runs on createStore(), too.
    // It returns a new dispatch() function

    return action => {
      // Runs on every dispatch()
    }
  }
}

//applying middleware 
const enhancer = applyMiddleware(logger, thunk, ...)
const store = createStore(reducer, {}, enhancer)
