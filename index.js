 // adds Express, Pug and path
var express = require('express'),
pug = require('pug'),
path = require('path'),
mods = require('./script.js');
 
var app = express(); 
 
// use Pug and set the public folder for static content, like the css file in this example
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public'))); 
 
// when the root URL is displayed, render the index.jade file passing in two variables
app.get('/', function(req, res){
    res.render('index', {
        myTitle: 'Fortune', 
        myContent: mods.randomFortune()
    });
});
 
app.listen(3000);