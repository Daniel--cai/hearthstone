import { combineReducers } from 'redux';
import { ADD_CARD, PLAY_CARD } from '../actions/cards'


function removeCard(cards, index){
    return [...cards.slice(0, index), ...cards.slice(index+1)]
}

function addCardBoard(board, card, player){ 
    if (player == 0){
        return [[...board[0],{health: card.health, attack:card.attack, mana: card.mana, name: card.name}], [...board[1]]]
    } else {
        return [[...board[0]],[...board[1], {health: card.health, attack:card.attack, mana: card.mana, name: card.name}]]
    }
}

function field (state = {cards:[], board:[[],[]]}, action){
    switch(action.type){
        case ADD_CARD:
            switch(action.name){
                case "shyvana":
                    return {...state, cards:[...state.cards, {health: 5, attack:4, mana: 3, name: "shyvana"}]};  

                case "caitlyn":
                    return {...state, cards:[...state.cards, {health: 5, attack:4, mana: 3, name: "caitlyn"}]};  
                default:
                    return {...state, cards:[...state.cards, {health: 5, attack:4, mana: 3, name: "back"}]}; 
            }  
        case PLAY_CARD :
            return {...state, cards: removeCard(state.cards, action.index), 
                board:addCardBoard(state.board, state.cards[action.index], action.player)
            }
        default:
            return state
    }
}

const App = combineReducers({
    field,
})

export default App

