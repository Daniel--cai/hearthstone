export const ADD_CARD = 'ADD_CARD';
export const PLAY_CARD = 'PLAY_CARD'
export const ATTACK_MINION = 'ATTACK_MINION';
export const NEW_CARD = 'NEW_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const REQUEST_ADD_CARD = 'REQUEST_ADD_CARD';
export const ADD_GEM = 'ADD_GEM';
export const REMOVE_GEM = 'REMOVE_GEM';
export const ADD_MAX_GEM = 'ADD_MAX_GEM';
export const ADD_PLAYER_HEALTH = 'ADD_PLAYER_HEALTH';
export const REMOVE_PLAYER_HEALTH = 'REMOVE_PLAYER_HEALTH';
export const REMOVE_MINION = 'REMOVE_MINION';

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
    return (dispatch, getState) => {
        dispatch({type: ATTACK_MINION, source, target})
        var targetHealth = getState().board[0].find(m => m.id == target.id).health
        var sourceHealth = getState().board[0].find(m => m.id == source.id).health
        if (targetHealth == 0)
            dispatch(removeMinion(source,target))
        if (sourceHealth == 0)
            dispatch(removeMinion(target,source))   
    }
}

export function removeMinion(source,target){
    return(dispatch, getState) =>{
        dispatch({type: REMOVE_MINION, source, target})
    }
}

export function newCard(name){
    return {type: NEW_CARD, name}
}

export function removeCard(id){
    return (dispatch) => {
        dispatch({type: REMOVE_CARD, id}) 
    }
}

export function addGem(amount){
    return {type: ADD_GEM, amount}
}

export function removeGem(amount){
    return {type: REMOVE_GEM, amount}
}

export function addMaxGem(amount){
    return {type: ADD_MAX_GEM, amount}
}

export function addPlayerHealth(amount){
    return {type: ADD_PLAYER_HEALTH, amount}
}

export function removePlayerHealth(amount){
    return {type: REMOVE_PLAYER_HEALTH, amount}
}