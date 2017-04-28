import io from 'socket.io-client';
import {PLAY_CARD, REMOVE_CARD}from './actions/cards'

var socket = null;

export const socketMiddleware = store=>next=>action=>{
    const result = next(action);
    if (socket){
        if (action.type == PLAY_CARD){
            var data = action;
            let { state, ...data} = data
            socket.emit(PLAY_CARD, data);
        }
    }
    return result;
}


export default function(store){
    socket = io();
    socket.emit('event', {hello:'init'});
    socket.on('news', (data)=>
        console.log('received:', data)
    )
}