var express = require('express');
wines = require('./routes/wines');
var app = express();


app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});



//app.get('/wines/:id', wines.findById);


app.get('/wines', wines.findAll);
//app.get('/wines', function(req, res) {
//    res.send([{name:'wine1'}, {name:'wine2'}]);
//});
//app.get('/wines/:id', function(req, res) {
  //  res.send({id:req.params.id, name: "The Name", description: "description"});
//});

app.listen(3000);
console.log('Express Listening on port 3000...');