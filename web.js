var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  try {
  fs.readFileSync('./index.html', 'utf8', function (err, data) {
	if (err) response.send('unable to load file index.html' + err);
	response.send('[' + data.toString() + ']');
  });
  }
  catch (err2) {
	response.send(err2);
  }
  response.send('Hello World');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
