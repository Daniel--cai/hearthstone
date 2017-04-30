var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var compiler = webpack(webpackConfig);
const PORT = process.env.PORT || 3000


var actions = require('./constants');
var allCards = require('./cards')

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))



const connections = [];
var cardIdCounter = 0;

function newCard(action){
    cardIdCounter++;
    var card = allCards.find(c => c.name == action.name)
    var data = Object.assign({}, card, {type: actions.ADD_CARD, id:cardIdCounter}) 
    console.log(data)
    return data
}

var test_newCard = newCard({type:actions.ADD_CARD, name:'jayce' })
console.log(test_newCard.type == actions.ADD_CARD)

io.on('connection', (socket) => {
    connections.push(socket)
    console.log('a user connected')

    socket.on('event', (data)=>{
        console.log(data)
        socket.emit('news', {hello: 'wosrld'});
    })
    socket.on('disconnect', ()=>{
        const index = connections.indexOf(socket);
        connections.splice(index,1);
        console.log('user disconnected')
    })

    socket.on(actions.PLAY_CARD, (data)=>{
        console.log('updateing', data);
    })

    socket.on(actions.REQUEST_ADD_CARD, (action)=>{
        console.log('received',action)
        socket.emit(actions.ADD_CARD, newCard(action))
    })
})

server.listen(PORT, function(){
    console.log("https://localhost:"+PORT);
})