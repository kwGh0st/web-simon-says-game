var colors = ['red', 'blue', 'green', 'yellow'];

var userClickedPattern = [];
var gamePattern = [];
var level = 0;

function nextSequence() {
    level++;
    var random = Math.floor(Math.random() * 3);
    var randomChosenColour = colors[random];
    gamePattern.push(randomChosenColour);
    $('.' + gamePattern[gamePattern.length - 1]).addClass('pressed');
    playAudio(gamePattern[gamePattern.length - 1]);
    setTimeout( function () {
        $('.' + gamePattern[gamePattern.length - 1]).removeClass('pressed')
    } , 100);
   
}


$('button').on('click', function() {
    var userChoosenColour = $(this).attr('id');
    userClickedPattern.push(userChoosenColour);
    $('.' + userClickedPattern[userClickedPattern.length - 1]).addClass('pressed');
    playAudio(userClickedPattern[userClickedPattern.length - 1]);
    setTimeout( function () {
        $('.' + userClickedPattern[userClickedPattern.length - 1]).removeClass('pressed')
    } , 100);
});

$(document).keypress(function (event) {
    switch (event.key) {
        case 'a':
            $('h1').text('Level ' + level);
            nextSequence();
            break;
    }
});

function playAudio(color) {
    switch(color) {
        case 'blue':
            var audio = new Audio('./sounds/blue.mp3');
            audio.play();
            break;

        case 'red':
            var audio = new Audio('./sounds/red.mp3');
            audio.play();
            break;

        case 'yellow':

            var audio = new Audio('./sounds/yellow.mp3');
            audio.play();
            break;

        case 'green':
            var audio = new Audio('./sounds/green.mp3');
            audio.play();
            break;
    }
}