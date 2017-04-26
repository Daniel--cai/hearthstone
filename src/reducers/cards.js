import { ADD_CARD, REMOVE_CARD } from '../actions/cards'
import uuid from 'uuid/v4';
var cardInitialState = []

const ALLCARDS = [

    {
        name:'shyvana',
        health: 2,
        attack: 2,
        mana: 3,
    },
    {
        name:'caitlyn',
        health: 1,
        attack: 1,
        mana: 3,
    },
    {
        name:'back',
        health: 5,
        attack: 4,
        mana: 3,
    },
]

export const  cards = (state = cardInitialState, action) => {
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