module.exports = function(action){
    console.log(this.x);
    this.socket.emit(actions.ADD_CARD, newCard(action))
}
