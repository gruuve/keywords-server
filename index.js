var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.listen(port);
console.log('Server started! At http://localhost:' + port);

app.get('/api/users', function(req, ress) {
    var qu = req.param('q');

     
    var gsearch = require('gsearch');
    gsearch.suggest(qu, function(error, data, res) {
      ress.send(JSON.stringify(data));
    });


  
    //res.send(qu);
  });

