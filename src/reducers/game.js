import { ADD_GEM,  REMOVE_GEM,  ADD_MAX_GEM, ADD_PLAYER_HEALTH, REMOVE_PLAYER_HEALTH } from '../actions/cards'
import uuid from 'uuid/v4';
var gameInitialState = {gem:0, maxgem:1, playerhealth:20}

export default function cards (state = gameInitialState, action) {
    switch(action.type){
        case ADD_GEM:
            return {...state, gem: Math.min(state.gem+action.amount, state.maxgem)};  
        case REMOVE_GEM:
            return {...state, gem: Math.max(state.gem-action.amount, 0)};  
        case ADD_MAX_GEM:
            return {...state, maxgem: Math.min(state.maxgem+action.amount, 10)};  
        case ADD_PLAYER_HEALTH:
            return {...state, playerhealth: playerhealth+action.amount}
        case REMOVE_PLAYER_HEALTH:
             return {...state, playerhealth: Math.min(playerhealth+action.amount,0)}
        default:
            return state
    }
}