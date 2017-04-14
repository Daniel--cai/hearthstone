import { combineReducers } from 'redux';
import { ADD_CARD, PLAY_CARD } from '../actions/cards'

function cards(state = [], action){
    switch(action.type){
        case ADD_CARD:
            switch(action.name){
                case "shyvana":
                    return [...state, {health: 5, attack:4, mana: 3, name: "shyvana"}];  
                case "caitlyn":
                    return [...state, {health: 5, attack:4, mana: 3, name: "caitlyn"}]; 
                case "bard":
                    return [...state, {health: 5, attack:4, mana: 3, name: "caitlyn"}];
                default:
                    return [...state, {health:0, attack:0, mana: 0, name:'back'}]
            }  
        default:
            return state
    }
}

function board(state = [[],[]], action){
    var opponent = action.player == 0 ? 1 : 0;
    switch(action.type){
        case PLAY_CARD :
            const newstate = [...state]
            newstate[action.player] = [...state[action.player], {health: 5, attack:4, mana: 3, name: action.name}]
            return newstate
         default:
            return state
    }
}

const App = combineReducers({
    cards,
    board,
})

export default App

