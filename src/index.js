import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from 'components/App';

import { applyMiddleware, createStore, compose } from 'redux';
import thunk  from 'redux-thunk'
import reducer from 'reducers/rootReducer'

import { addCard, playCard, newCard, removeCard } from 'actions/cards'
import { Provider } from 'react-redux'
import socketHandler, {socketMiddleware} from './sockethandler'


const io = require('socket.io-client') 
const socket = io();

require('./assets/fonts/belwe.scss');
const mountApp = document.getElementById('root')
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose

socketHandler(store);
const store = createStore(reducer,composeEnhancers, applyMiddleware(thunk,socketMiddleware));
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
  module.hot.accept('reducers/rootReducer', ()=>{
    const nextRootReducer = require('reducers/rootReducer').default;
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

//store.dispatch(playCard("shyvana",0))
store.dispatch(addCard("shyvana"))
store.dispatch(addCard("caitlyn"))
store.dispatch(addCard("caitlyn"))

