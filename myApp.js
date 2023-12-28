let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser');

console.log('Hello World');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

app.get('/now', (req, res, next) => {
	req.time = new Date().toString();
	next();
}, (req, res) => {
	res.send({"time": req.time});
});

app.get('/name', (req, res) => {
	const first = req.query.first;
	const last = req.query.last;
	res.send({"name": `${first} ${last}`});
});

app.get('/:word/echo', (req, res) => {
	res.send({"echo": req.params.word});
});


function logger (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
}




























 module.exports = app;
