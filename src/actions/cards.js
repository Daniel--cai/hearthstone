export const ADD_CARD = 'ADD_CARD';
export const PLAY_CARD = 'PLAY_CARD'
export const ATTACK_MINION = 'ATTACK_MINION';
export const NEW_CARD = 'NEW_CARD';
export const REMOVE_CARD = 'REMOVE_CARD'
export const REQUEST_ADD_CARD = 'REQUEST_ADD_CARD'

/**
 * Received from server. To be added to the store.
 * @param {string} name - Name of card
 * @param {number} id - ID received from server.
 */
export function addCard(card,id){
    return {type: ADD_CARD, card,id}
}

export function requestAddCard(name){
    return {type: REQUEST_ADD_CARD, name}
}

export function playCard(player, id){
    return (dispatch,getState) => {   
        let fixed = id;   
        dispatch ({type: PLAY_CARD, player, id:fixed, state:getState()}) 
        dispatch (removeCard(fixed))
    }
}

export function attackMinion(source, target){
    return {type: ATTACK_MINION, source, target}
}

export function newCard(name){
    return {type: NEW_CARD, name}
}

export function removeCard(id){
    return (dispatch) => {
        dispatch({type: REMOVE_CARD, id}) 
    }
}
