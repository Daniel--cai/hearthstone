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

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

const connections = [];
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

    socket.on('PLAY_CARD', (data)=>{
        console.log('updateing', data);
    })
})

server.listen(PORT, function(){
    console.log("https://localhost:"+PORT);
})