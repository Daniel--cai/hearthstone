import io from 'socket.io-client';
import {ADD_CARD, PLAY_CARD, REMOVE_CARD, REQUEST_ADD_CARD}from './actions/cards'
import {addCard} from './actions/cards'

var socket = null;

//request
export const socketMiddleware = store=>next=>action=>{
    const result = next(action);
    if (socket){
        if (action.type == REQUEST_ADD_CARD){
            let { state, ...data} = action
            socket.emit(REQUEST_ADD_CARD, data);
        }
    }
    return result;
}

//response
export default function(store){
    socket = io();
    socket.on(ADD_CARD, (data)=>{
        let {id, type, ...card } = data
        store.dispatch(addCard(card,id))   
    })
}