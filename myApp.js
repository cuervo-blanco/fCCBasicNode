let express = require('express');
let app = express();

console.log('Hello World');

app.use('/public/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	let absolutePath = __dirname + '/views/index.html';
	res.sendFile(absolutePath);
});

app.get('/json', (req, res) => {

	res.send({"message": "Hello json"});

});































 module.exports = app;
