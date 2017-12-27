import React from 'react'

import ReactDOM from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk';

import counter from './reducers'
import increaseAction from './actions'
import Counter from './components/Counter'


// Store
const store = createStore(
    counter,
    applyMiddleware(thunk)
)

// Map Redux state to component props
function mapStateToProps(state,dispatch) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch){
  return {
    onIncreaseClick: () => dispatch(increaseAction())
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

