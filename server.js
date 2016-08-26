var express = require('express');
wines = require('./routes/wines');
var app = express();


app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});



app.get('/wines2'   , wines.findById)
app.get('/wines', wines.findAll);

app.listen(3000);
console.log('Express Listening on port 3000...');