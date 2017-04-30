var actions = require('./constants')
var allCards = require('./cards')
let cardIdCounter = 0;

function newCard(action){
    var card = allCards.find(c => c.name == action.name)
    var data = Object.assign({}, card, {type: actions.ADD_CARD, id:cardIdCounter++}) 
    return data
}

module.exports = function(action){
    this.socket.emit(actions.ADD_CARD, newCard(action))
}
