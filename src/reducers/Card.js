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
                    return [...state, {health:0, attack:0, mana: 0, name:'NULL'}]
            }  
        default:
            return state
    }
}

const Card = combineReducers({
    cards,
})

export default Card

