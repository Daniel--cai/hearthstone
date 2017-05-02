var actions = require('./constants')
var allCards = require('./cards')
let cardIdCounter = 0;

function newCard(action){
    var card = allCards.find(c => c.name == action.name)
    var data = Object.assign({}, card, {type: actions.ADD_CARD, id:cardIdCounter++}) 
    return data
}

function playCard(action){  
}

module.exports = {
    RequestAddCard: function(action) {
        var card = newCard(action)
        this.game.players[0].hand.push(card);
        console.log(this.game.players[0])
        this.socket.emit(actions.ADD_CARD, card)
    },
    PlayCard: function (action){
        this.socket.emit(actions.PLAY_CARD)
    },
    log: function(action) {
    }
}
