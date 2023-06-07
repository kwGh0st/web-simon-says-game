var colors = ['red', 'blue', 'green', 'yellow'];

var userClickedPattern = [];
var gamePattern = [];

function nextSequence() {

    var random = Math.floor(Math.random() * 3);
    var randomChosenColour = colors[random];
    gamePattern.push(randomChosenColour);
    $('.' + gamePattern[0]).addClass('pressed');
    playAudio(gamePattern[0]);
    setTimeout( function () {
        $('.' + gamePattern[0]).removeClass('pressed')
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