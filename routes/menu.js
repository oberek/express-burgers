exports.index = function(req, res) {
    res.send("Welcome to the Menu! (<a href='menu/burgers'>Burgers</a>) (<a href='menu/sides'>Sides</a>) (<a href='menu/desserts'>Desserts</a>)");
};
 
exports.burgers = function(req, res) {
    res.send("BURGERS");
};

exports.sides = function(req, res) {
    res.send("SIDES");
};

exports.desserts = function(req, res) {
    res.send("DESSERTS");
};