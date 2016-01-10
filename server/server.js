var express  = require('express');
var app = express();
app.listen(8080);
app.get('*', function(req, res) {

        res.sendfile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
console.log("Server is listening");