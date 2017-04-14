export const ADD_CARD = 'ADD_CARD';
export const PLAY_CARD = 'PLAY_CARD'
export const DRAW_HAND = 'DRAW_HAND';


export function addCard(name){
    return {type: ADD_CARD, name}
}

export function playCard(name, player){
    return {type: PLAY_CARD, name, player}
}