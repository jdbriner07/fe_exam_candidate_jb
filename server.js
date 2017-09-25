const express = require('express');

const app = express();
const server = require('http').Server(app);

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function(req, res) {
	res.send('working!');
})

const port = process.env.PORT || 3000;

server.listen(port, function() {
	console.log('listening on port ' + port);
})