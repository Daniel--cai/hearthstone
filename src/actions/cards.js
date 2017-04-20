export const ADD_CARD = 'ADD_CARD';
export const PLAY_CARD = 'PLAY_CARD'
export const ATTACK_MINION = 'ATTACK_MINION';


export function addCard(name){
    return {type: ADD_CARD, name}
}

export function playCard(player, index){
    return {type: PLAY_CARD, player, index}
}

export function attackMinion(attacker, attacked){
    return {type: ATTACK_MINION, attacker, attacked}
}