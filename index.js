var colors = ['red', 'blue', 'green', 'yellow'];

var userClickedPattern = [];
var gamePattern = [];
var level = 0;

function nextSequence() {
    userClickedPattern = [];
    $('h1').text('Level ' + level);
    level++;
    var random = Math.floor(Math.random() * 3);
    var randomChosenColour = colors[random];
    gamePattern.push(randomChosenColour);
    $('#' + gamePattern[gamePattern.length - 1]).addClass('pressed');
    playAudio(gamePattern[gamePattern.length - 1]);
    setTimeout( function () {
        $('#' + gamePattern[gamePattern.length - 1]).removeClass('pressed')
    } , 100);
   
}


$('button').on('click', function() {
    var userChoosenColour = $(this).attr('id');
    userClickedPattern.push(userChoosenColour);
    $('#' + userClickedPattern[userClickedPattern.length - 1]).addClass('pressed');

    playAudio(userClickedPattern[userClickedPattern.length - 1]);
    
    setTimeout( function () {
        $('#' + userClickedPattern[userClickedPattern.length - 1]).removeClass('pressed')
    } , 100);
    checkAnswer();
});

$(document).keypress(function (event) {
    switch (event.key) {
        case 'a':
            $('h1').text('Level ' + level);
            nextSequence();
            break;
    }
});


function checkAnswer() {

    var checkIndex = userClickedPattern.length - 1;

    if (userClickedPattern[checkIndex] === gamePattern[checkIndex]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        playAudio("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        restart();
    }
    }
    
function restart() {
        $(document).keypress(function () {
        level = 0;
        gamePattern = [];
        $('h1').text('Level ' + level);
        nextSequence();  
        })   
    }


function playAudio(className) {
    switch(className) {
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

        case 'game-over':
            var audio = new Audio('./sounds/wrong.mp3');
            audio.play();
            break;
    }
}