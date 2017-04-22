import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from 'components/App';

import { applyMiddleware, createStore } from 'redux';
import reducer from 'reducers'
import { addCard, playCard, newCard, removeCard } from 'actions/cards'
import { Provider } from 'react-redux'

require('./assets/fonts/belwe.scss');
const mountApp = document.getElementById('root')

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);
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
}

const logger = (store)=>(next)=>(action)=>{
  console.log("actions fired", action)
  next(action);
}

const middleware = applyMiddleware(logger);
store.subscribe(()=> {
  console.log("store changed", store.getState());
})

//store.dispatch(playCard("shyvana",0))
store.dispatch(newCard("caitlyn",1))
store.dispatch(newCard("caitlyn",1))
store.dispatch(newCard("caitlyn",1))