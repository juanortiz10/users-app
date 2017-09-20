import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { getUsers } from './reducers'
import thunk  from 'redux-thunk'

const middleware = [thunk];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(getUsers);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
