import { combineReducers } from 'redux';
import { ADD_CARD, PLAY_CARD } from '../actions/cards'

function addCard(state = [], action){
    switch(action.type){
        case ADD_CARD:
            switch(action.name){
                case "Shyvana":
                    return [...state, {health: 5, attack:4, mana: 3, name: "Shyvana"}];  
                case "Caitlyn":
                    return [...state, {health: 5, attack:4, mana: 3, name: "Caitlyn"}]; 
                default:
                    return [...state, {health:0, attack:0, mana: 0, name:'NULL'}]
            }  
        default:
            return state
    }
}

const Card = combineReducers({
    addCard,
})

export default Card

