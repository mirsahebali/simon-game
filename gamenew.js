var buttons = ['red' , 'blue' , 'green', 'yellow'];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

$(document).keypress(function (){
    $('#level-title').text("Level " + level);
    nextSequence();
    started = true;
    
});

$('.btn').click(function () {
    var userChosenColour = $(this).attr('id')
      userClickedPattern.push(userChosenColour);
      playSound(userChosenColour);
      animatePress(userChosenColour);
     // console.log(userClickedPattern);
    
     checkAnswer(userClickedPattern.length - 1);
    
  })

function nextSequence(){
    userClickedPattern =[];
    level++;
    var randomChosenColour = buttons[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColour);
    $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
    
}



function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
$('#' + currentColour).addClass('pressed');
setTimeout(function(){
    $('#' + currentColour).removeClass("pressed");
}, 100);

}


function checkAnswer(currentLevel){
    var index = userClickedPattern[userClickedPattern.length - 1];
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
        console.log("right");
        if (userClickedPattern.length === gamePattern.length){
    setTimeout(function(){ nextSequence(); }, 1000);
    }}
    else {
        console.log("wrong");
        playSound('fail');
        $('body').addClass('game-over');
        var waudio = new Audio('C:/Users/mirsa/web deveopement/Simon Game Challenge Starting Files/sounds/wrong.mp3');
        waudio.play();
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
        $('#level-title').text('Game Over! Press any key to restart.');
        startOver();
    }
}

function startOver(){
   gamePattern = [];
   level = 0; 
   started = false;
}

