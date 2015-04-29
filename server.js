'use strict';

var express = require('express');

var app = express();
app.set('port', 5000);

app.use(express.static(__dirname + '/public'));

app.get('/secret', function(request, response) {
  response.status(200).send('<h1>Oh no! My secret! I would have gotten away with it if it weren\'t for you meddling developers!</h1>');
});

app.get('/*', function(req, res) {
  res.status(404).sendFile('/Users/ScottThiessen/programming/sea-b29/vote_tracker/public/404.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost: ' + app.get('port'));
});
