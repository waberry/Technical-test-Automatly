const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/ping/', function (req, res) {
 res.send('pong');
});

app.post('/notify/:room', function (req, res) {
var message = req.body.message;
var room = req.params.room;
 io.sockets.emit('notification', message, room);
 res.send('ok');
});

// WARNING: app.listen(80) will NOT work here!

io.on('connection', (socket) => {
	console.log("socket:\n" + socket.id);
  socket.emit('notification', "User " + socket.id +  " is connected.");
  socket.on('join', (room) => {
  	socket.join(room);
  	socket.emit('notification', "User " + socket.id + " has joined the room " + room, room);
    console.log("room is : " + room);
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(8080);

//app.listen(process.env.PORT || 8080);
