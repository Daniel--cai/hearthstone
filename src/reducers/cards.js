import { ADD_CARD, REMOVE_CARD } from '../actions/cards'
import uuid from 'uuid/v4';
var cardInitialState = []

const ALLCARDS = [
    {
        name:'back',
        health: 5,
        attack: 4,
        mana: 3,
    },
    {
        name:'shyvana',
        health: 2,
        attack: 1,
        mana: 6,
    },
    {
        name:'caitlyn',
        health: 2,
        attack: 11,
        mana: 2,
    },
    {
        name:'jayce',
        health: 33,
        attack: 3,
        mana: 6,
    },
]

export default function cards (state = cardInitialState, action) {
    let id = uuid();
    switch(action.type){
        case ADD_CARD:
            var card = ALLCARDS.find(c=> c.name == action.name)
            if (card != null){
                return [...state, {...card, id:id}];  
            } else {
                [...state, {...ALLCARDS[0], id:id} ]
            }        
        case REMOVE_CARD:
            return state.filter(c => c.id != action.id)
        default:
            return state
    }
}