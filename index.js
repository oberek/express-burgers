 // adds Express, Pug and path
var express = require('express'),
pug = require('pug'),
path = require('path');
var fs = require('fs');
var app = express();
var pureJson = require('./public/json/menu.json');
// use Pug and set the public folder for static content, like the css file in this example
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public'))); 

app.get('/', function(req, res){
    res.render('index');
});
app.get('/:viewname', function(req, res){
    res.render(req.params.viewname, pureJson);
    res.status(404).send("Sorry, can't find that page!")
});

app.listen(3000);