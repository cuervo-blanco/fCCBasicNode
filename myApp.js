let express = require('express');
let app = express();
require('dotenv').config();

console.log('Hello World');

app.use('/public/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	let absolutePath = __dirname + '/views/index.html';
	res.sendFile(absolutePath);
});

app.get('/json', (req, res) => {
	let message = {"message": "Hello json"};

	if(process.env.MESSAGE_STYLE === 'uppercase'){
	message.message = message.message.toUpperCase();
	}	

	res.send(message);

});































 module.exports = app;
