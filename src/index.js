import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from 'components/App';

import { applyMiddleware, createStore, compose } from 'redux';
import thunk  from 'redux-thunk'
import reducer from 'reducers'

import { playCard, newCard, removeCard } from 'actions/cards'
import { Provider } from 'react-redux'
import socketHandler, {socketMiddleware} from './sockethandler'


const io = require('socket.io-client') 
const socket = io();

require('./assets/fonts/belwe.scss');
const mountApp = document.getElementById('root')
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: true,
    }) : compose;

const middleware = [thunk,socketMiddleware]
const enhancer  = composeEnhancers(applyMiddleware(...middleware))
const store = createStore(reducer,enhancer);

socketHandler(store);
const render = (Component) => {
  ReactDOM.render(
    <Provider store = {store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>, mountApp

  );
};

render(App);

if (module.hot) {
  module.hot.accept('components/App', () => {
    render(App)
  });
  module.hot.accept('reducers/index', ()=>{
    const nextRootReducer = require('reducers').default;
    store.replaceReducer(nextRootReducer);
  })
}

const logger = (store)=>(next)=>(action)=>{
  console.log("actions firfded", action)
  next(action);
}



store.subscribe(()=> {
  //console.log("store changed", store.getState());
})



