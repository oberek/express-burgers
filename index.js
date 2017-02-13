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

app.get('/', routes.home);
app.get('/directions', directions);
app.get('/menu/burgers', menu.burgers);
app.get('/menu/sides', menu.sides);
app.get('/menu/desserts', menu.desserts);
 
app.listen(3000);