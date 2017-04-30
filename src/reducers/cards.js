import { ADD_CARD, REMOVE_CARD } from '../actions/cards'
import uuid from 'uuid/v4';
var cardInitialState = []

export default function cards (state = cardInitialState, action) {
    switch(action.type){
        case ADD_CARD:
            return [...state, {...action.card, id: action.id}];  
 
        case REMOVE_CARD:
            return state.filter(c => c.id != action.id)
        default:
            return state
    }
}