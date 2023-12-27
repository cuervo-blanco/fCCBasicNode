let express = require('express');
let app = express();
require('dotenv').config();

console.log('Hello World');

app.use('/public/', logger,  express.static(__dirname + '/public'));

app.get('/', logger, (req, res) => {
	let absolutePath = __dirname + '/views/index.html';
	res.sendFile(absolutePath);
});

app.get('/json', logger, (req, res) => {
	let message = {"message": "Hello json"};

	if(process.env.MESSAGE_STYLE === 'uppercase'){
	message.message = message.message.toUpperCase();
	}	

	res.send(message);

});


function logger (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
}




























 module.exports = app;
