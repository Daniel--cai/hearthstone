import { combineReducers } from 'redux';

import cards from './cards'
import board from './board'
import game from './game'

const App = combineReducers({
    cards,
    board,
    game,
})

export default App

