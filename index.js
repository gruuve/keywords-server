


var gsearch = require('gsearch');
gsearch.suggest('cats', function(error, data, res) {
  console.log(JSON.stringify(data));
});