import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from './components/App';

import { applyMiddleware, createStore } from 'redux';
const mountApp = document.getElementById('root')

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>, mountApp

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
  action.type= "DEC";
  next(action);
}

const middleware = applyMiddleware(logger);

const  reducer = function(state,action){
    if (action.type === "INC"){
      console.log(action.payload);
      return state+1;
    }
    return state;
}

const store = createStore(reducer,0, middleware);

store.subscribe(()=> {
  console.log("store chagned", store.getState());
})
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 12});