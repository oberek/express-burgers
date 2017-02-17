 // adds Express, Pug and path
var express = require('express'),
pug = require('pug'),
path = require('path');
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
//<<<<<<< HEAD
    res.render(req.params.viewname, pureJson);
    res.status(404).send("Sorry, can't find that page!");
// =======
//     res.render(req.params.viewname);
//     //res.status(404).send("Sorry, can't find that page!")
// >>>>>>> 2eb6066d5907fef05efadf788f5d3c8c187faf41
});

app.listen(3000);