import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from './components/App';

import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers/card'
import { addCard } from './actions/cards'
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
  next(action);
}

const middleware = applyMiddleware(logger);


const initialState = {}

const  reducers = function(state=initialState,action){
    switch(action.type) {
      case "SHYVANA":
        var newstate = {health: 5, attack:4, mana: 3, name: "Shyvana"};
        var newobj = {...state, 
          cards: [...state.cards, newstate]
        }
        return newobj;
      case "CAITLYN":
        var newstate = {health: 2, attack:1, mana: 1, name: "Caitlyn"};
        var newobj = {...state, 
          cards: [...state.cards, newstate]
        }
        console.log(newobj)
        return newobj;      
      default:
        return state
    }
}


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);


store.subscribe(()=> {
  console.log("store chagned", store.getState());
})

store.dispatch(addCard("Shyvana"));
store.dispatch(addCard("Bard"));
store.dispatch(addCard("Lulu"));