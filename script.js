exports.randomFortune = function() {
    var fortunes = ["You're gunna die",
    "You're gunna make monies",
    "Something will happen today",
    "Run! They're coming!",
    "You're gunna live a very average life"];
    var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    return fortune;
}