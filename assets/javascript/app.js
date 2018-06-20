$(document).ready(function() {

var time = 120

var timer = setInterval(function() {
    $("#countdown").text(time--);
    if (time == -1) {
        $("#countdown").text("Time's Up!");
        clearInterval(timer);
    }
}, 1000);

// create a countdown timer of 120 seconds



// game ends when the time runs out



// create a trivia form with multiple choice or true/false options (10 questions)

// player can only pick one answer per question

$("input[type=radio]").on("change", function() {
    $("input[type=radio]").not(this).prop("checked", false);
});

// this data attr for value of each button (true or false)

// FOR LOOP - go through each multiple choice to assess if selected is correct or wrong

var wins = 0;
var losses = 0;

$("correct").on("click", function () {
    wins++;
});

$(".incorrect").on("click", function () {
    losses++;
});
    

// page reveals questions answered correctly
// will show once timer runs out

var scoreboard = "<p> Time's up, the game has ended. </p> <br>" + "Correct Answers: " + wins + "<br>" + "Incorrect Answers: " + losses + "<br>"

$("#doneButton").on("click", function() {
    $("#game").html(scoreboard);
    $("#countdown").text("");
})



// page reveals questions answered incorrectly
// will show once timer runs out


})
