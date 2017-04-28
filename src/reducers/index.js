import { combineReducers } from 'redux';

import cards from './cards'
import board from './board'

const App = combineReducers({
    cards,
    board,
})

export default App

