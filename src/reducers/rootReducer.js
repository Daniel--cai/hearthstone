import { combineReducers } from 'redux';
import uuid from 'uuid/v4';
import { cards } from 'reducers/cards'
import { board } from 'reducers/board'

const App = combineReducers({
    cards,
    board,
})

export default App

