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

var RequestAddCard = require('./handler');
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
    var card = allCards.find(c => c.name == action.name)
    var data = Object.assign({}, card, {type: actions.ADD_CARD, id:cardIdCounter++}) 
    return data
}

function greetCurried (io, socket){
    return function(handler) { 
        handler.bind({io,socket})
    }
}

io.on('connection', (socket) => {
    this.socket = socket;

    const greetHello = greetCurried((action)=>handler(action)) 
    connections.push(socket)
    console.log('a user connected')

    socket.on('event', (data)=>{
        console.log(data)
        socket.emit('ndews', {hello: 'wosrld'});
    })
    socket.on('disconnect', ()=>{
        const index = connections.indexOf(socket);
        connections.splice(index,1);
        console.log('user disconnected')
    })

    socket.on(actions.PLAY_CARD, (data)=>{
        console.log('updateing', data);
    })

    socket.on(actions.REQUEST_ADD_CARD, greetHello(RequestAddCard))
})




server.listen(PORT, function(){
    console.log("https://localhost:"+PORT);
})