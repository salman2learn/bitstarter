var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  try {
 	var data = fs.readFileSync('./index.html', 'utf8');
	response.send(data );
  }
  catch (err2) {
	response.send(err2);
  }
  response.send('Hello World 44');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
