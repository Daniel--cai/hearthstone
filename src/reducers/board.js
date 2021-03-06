import {PLAY_CARD,ATTACK_MINION, REMOVE_MINION} from '../actions/cards'


var boardInitialState = [[],[]]

const addCardBoard = (board, card, player) => { 
    if (player == 0){
        return [[...board[0],{health: card.health, attack:card.attack, mana: card.mana, name: card.name, id:card.id, player: 0}], [...board[1]]]
    } else {
        return [[...board[0]],[...board[1], {health: card.health, attack:card.attack, mana: card.mana, name: card.name, id:card.id, player: 1}]]
    }
}

const attackMinion = (board, source, target) => {
    var sourceAttack = source.attack;
    var sourceHealth = source.health;
    var targetAttack = target.attack;
    var targetHealth = target.health;
    var copy = board.map(p => p.map(m=>({...m})))
    copy[source.player].find(m=>m.id == source.id).health = Math.max(sourceHealth - targetAttack,0) 
    copy[target.player].find(m=>m.id == target.id).health = Math.max(targetHealth - sourceAttack,0)
    return copy

}

const removeMinion = (board, source, target) =>  {    
    return [board[0].filter(m => m.id != target.id),[...board[1]]]

}

export default function board(state = boardInitialState, action) {
 
    switch(action.type){
        case PLAY_CARD:
            return addCardBoard(state, action.state.cards.find((c => c.id == action.id)),action.player)
        case ATTACK_MINION:
            return attackMinion(state, action.source, action.target)
        case REMOVE_MINION:
            return removeMinion(state,action.source, action.target)
        default:
            return state;
    }
}
