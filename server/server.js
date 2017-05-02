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

const Game = require('./game')
const player = require('./player')

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

const connections = [];
const games = [];
let cardIdCounter = 0;


io.on('connection', (socket) => { 
    let game = Object.assign({},Game);
    game.players = [Object.assign({},player), Object.assign({},player)]
    let _curry = func => data => func.bind({socket,game})(data)
    let RequestAddCard = _curry(require('./handler').RequestAddCard);
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

    socket.on(actions.REQUEST_ADD_CARD, RequestAddCard)
})






server.listen(PORT, function(){
    console.log("https://localhost:"+PORT);
})