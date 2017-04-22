import { combineReducers } from 'redux';
import { ADD_CARD, PLAY_CARD,PLAY_CARDS, NEW_CARD, REMOVE_CARD } from '../actions/cards'

const removeCard = (cards, index) => {
    return [...cards.slice(0, index), ...cards.slice(index+1)]
}

const addCardBoard = (board, card, player) => { 
    if (player == 0){
        return [[...board[0],{health: card.health, attack:card.attack, mana: card.mana, name: card.name, id:card.id}], [...board[1]]]
    } else {
        return [[...board[0]],[...board[1], {health: card.health, attack:card.attack, mana: card.mana, name: card.name, id:card.id}]]
    }
}

const attackMinion = (attacker, attacked) => {

}

const field  = (state = {cards:[], board:[[],[]], idCounter:0}, action) => {
    let id = state.idCounter + 1;
    switch(action.type){
        case ADD_CARD:
            switch(action.name){
                case "shyvana":
                    return {...state, cards:[...state.cards, action.id], idCounter:id};  

                case "caitlyn":
                    return {...state, cards:[...state.cards, {health: 5, attack:4, mana: 3, name: "caitlyn", id:id}],idCounter:id};  
                default:
                    return {...state, cards:[...state.cards, {health: 5, attack:4, mana: 3, name: "back", id:id}],idCounter:id}; 
            }  
        case PLAY_CARDS :
            return {...state, cards: removeCard(state.cards, action.index), 
                board:addCardBoard(state.board, state.cards[action.index], action.player)
            }          
        default:
            return state
    }
}

export const ALLCARDS = [
    {
        name:'shyvana',
        health: 5,
        attack: 4,
        mana: 3,
    },
    {
        name:'caitlyn',
        health: 5,
        attack: 4,
        mana: 3,
    },
    {
        name:'back',
        health: 5,
        attack: 4,
        mana: 3,
    },
]

export const CardStatus = {
    DECK: 0,
    HAND: 1,
    PLAYER: 2,
    OPPONENT: 3,
    TRASH: 4,
}

//helper functions

const getCardByName = (name) => ALLCARDS.find(c => c.name === name)
const getCardById = (id, entity) => entity.find(c => c.id === id)

const initialState = {
    minions:[], 
    board: [[],[]],
    idCounter:0
}

const entity = (state = initialState, action) => {
    switch(action.type){
        case NEW_CARD:
            let id = ++state.idCounter;
            var card = getCardByName(action.name);      
            if (card)
                return {...state, minions:[...state.minions, {...card, id:id, status:CardStatus.DECK}], idCounter:id}
            else 
                return {...state, minions:[...state.minions, {...getCardByName('back'), id:id}], idCounter:id}
        case REMOVE_CARD:        
            return {...state, minions:state.minions.filter(c => c.id != action.id)}
        case PLAY_CARD:
            var c = {...state.minions[0]}
            var copy = state.minions.map(min=>({...min}))
            copy.find(c => c.id === action.id).status = CardStatus.PLAYER  
            return {...state, minions: copy}
        default:
            return state;
    }
}

const App = combineReducers({
    field,
    entity,
})

export default App

