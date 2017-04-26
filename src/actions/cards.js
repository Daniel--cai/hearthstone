export const ADD_CARD = 'ADD_CARD';
export const PLAY_CARD = 'PLAY_CARD'
export const ATTACK_MINION = 'ATTACK_MINION';
export const NEW_CARD = 'NEW_CARD';
export const REMOVE_CARD = 'REMOVE_CARD'

export function addCard(name){
    return {type: ADD_CARD, name}
}


export function playCard(player, id){
    return (dispatch,getState) => {      
        dispatch ({type: PLAY_CARD, player, id, state:getState()}) 
    }
}

export function attackMinion(source, target){
    return {type: ATTACK_MINION, source, target}
}

export function newCard(name){
    return {type: NEW_CARD, name}
}

export function removeCard(id){
    return {type: REMOVE_CARD, id}
}
