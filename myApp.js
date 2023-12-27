let express = require('express');
let app = express();

console.log('Hello World');

app.get('/', (req, res) => {
	let absolutePath = __dirname + '/views/index.html';
	res.sendFile(absolutePath);
});

app.use(__dirname + '/public');
































 module.exports = app;
