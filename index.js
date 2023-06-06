var colors = ['red', 'blue', 'green', 'yellow'];

var gamePattern = [];

function nextSequence() {
    
    var random = Math.floor(Math.random() * 3);
    var randomChosenColour = colors[random];
    gamePattern.push(randomChosenColour);
    $('.' + gamePattern[0]).addClass('pressed');
    playAudio(gamePattern[0]);
    setTimeout( function () {
        $('.' + gamePattern[0]).removeClass('pressed')
    } , 300);
   
}

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