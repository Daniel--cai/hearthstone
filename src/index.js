import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from 'components/App';

import { applyMiddleware, createStore } from 'redux';
import reducer from 'reducers/card'
import { addCard } from 'actions/cards'
import { Provider } from 'react-redux'
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
  module.hot.accept('./components/App', () => {
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