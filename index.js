var colors = ['red', 'blue', 'green', 'yellow'];

var gamePattern = [];

function nextSequence() {
    var random = Math.floor(Math.random() * 3);
    var randomChosenColour = colors[random];
    gamePattern.push(randomChosenColour);
}



