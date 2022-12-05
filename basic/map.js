import { connect } from 'react-redux'
// A functional React component
const App = ({ message, onMessageClick })=> {
  return (
    <div onClick={() => onMessageClick('hello')}>
      {message}
    </div>
  )
}
// Maps `state` to `props`:
// These will be added as props to the component.
const mapState = (state)=> {
  return { message: state.message }
}

// Maps `dispatch` to `props`:
const mapDispatch = (dispatch)=> {
  return {
    onMessageClick (message) {
      dispatch({ type: 'click', message })
    }
  }
}

// Connect them:
export default connect(mapState, mapDispatch)(App)
