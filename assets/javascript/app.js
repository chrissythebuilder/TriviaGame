$(document).ready(function() {

var time = 120;
var end = "<p> Time's up, the game has ended. </p> <br>" + "Correct Answers: " + this.wins + "<br>" + "Incorrect Answers: " + this.losses + "<br>"

var timer = setInterval(function() {
    $("#countdown").text(time--);
    if (time == -1) {
        $("#countdown").text("Time's Up!");
        $(".game").html(end);
        clearInterval(timer);
    }
}, 1000);

// create a countdown timer of 120 seconds

// game ends when the time runs out

// create a trivia form with multiple choice or true/false options (10 questions)

// player can only pick one answer per question


$("input[name=one]").on("change", function() {
    $("input[name=one]").not(this).prop("checked", false);
});

$("input[name=two]").on("change", function() {
    $("input[name=two]").not(this).prop("checked", false);
});

$("input[name=three]").on("change", function() {
    $("input[name=three]").not(this).prop("checked", false);
});

$("input[name=four]").on("change", function() {
    $("input[name=four]").not(this).prop("checked", false);
});

$("input[name=five]").on("change", function() {
    $("input[name=five]").not(this).prop("checked", false);
});

$("input[name=six]").on("change", function() {
    $("input[name=six]").not(this).prop("checked", false);
});

$("input[name=seven]").on("change", function() {
    $("input[name=seven]").not(this).prop("checked", false);
});

$("input[name=eight]").on("change", function() {
    $("input[name=eight]").not(this).prop("checked", false);
});

$("input[name=nine]").on("change", function() {
    $("input[name=nine]").not(this).prop("checked", false);
});

$("input[name=ten]").on("change", function() {
    $("input[name=ten]").not(this).prop("checked", false);
});


// this data attr for value of each button (true or false)

// FOR LOOP - go through each multiple choice to assess if selected is correct or wrong

var wins = 0;
var losses = 0;

$(".correct").on("click", function () {
    wins++;
});

$(".incorrect").on("click", function () {
    losses++;
});
    

// page reveals questions answered correctly
// will show once timer runs out



$("#doneButton").on("click", function() {
    var scoreboard = " <section> <h3> Time's up, the game has ended. </h3>" + "<br> <span> Correct Answers: </span>" + wins + "<br>" + "<br> <span> Incorrect Answers: </span>" + losses + " </section>"
    $(".game").html(scoreboard);
})



// page reveals questions answered incorrectly
// will show once timer runs out


})
