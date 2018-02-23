import registerServiceWorker from './registerServiceWorker'
import React from 'react'

import './assets/less/style.less'

import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import reducer from './reducers'

// https://github.com/zalmoxisus/redux-devtools-extension#usage redux 工具使用  12.19
  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  );
  const store = createStore(reducer, enhancer);

render(
  <Provider store={store}>
       <App /> 
  </Provider>,
  document.getElementById('root')
)

 registerServiceWorker(); 
