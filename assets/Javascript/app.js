$("#start-button").on("click", function () {
    $("#start-button").remove()
    console.log("start button")
    game.loadQuestion();
})

$(document).on("click", ".answer-button", function (e) {
    game.clicked(e);

})

$(document).on("click", "#reset", function () {
    game.reset();
})


var questions = [{
    question: "What did Will and Ashley trade her violin for at the pawn shop?",
    choices: ["Drums", "Bass Guitar", "Gold Necklace", "Gun"],
    correct: "Drums",
    winImage: "<img src='assets/images/drumsWin.gif' style= 'width: 300px; height: 300px;'>",
    lossImage: "<img src='assets/images/drumswrong.gif' style= 'width: 300px; height: 300px;''>"
},
{
    question: "How many kids did Uncle Phil have by the end of the series?",
    choices: ["Four", "Three", "Five", "Two"],
    correct: "Four",
    winImage: "<img src='assets/images/phillright.gif' style= 'width: 300px; height: 300px;'>",
    lossImage: "<img src='assets/images/philwrong.gif' style= 'width: 300px; height: 300px;'>"
},
{
    question: "In the episode 'The Mother of all Battles,' Ashley has a bully at school. What's the bully's name?",
    choices: ["Rachelle", "Isabelle", "Ingrid", "Paula"],
    correct: "Paula",
    winImage: "<img src='assets/images/paularight.gif' style= 'width: 300px; height: 300px;'>",
    lossImage: "<img src='assets/images/paulawrong.gif' style= 'width: 300px; height: 300px;'>"
},
{
    question: "In the very first episode, 'The Fresh Prince Project', who does Will confuse Geoffrey with?",
    choices: ["Carlton", "Uncle Phil", "Nicky", "Aunt Viv"],
    correct: "Uncle Phil",
    winImage: "<img src='assets/images/geoffreyright.gif' style= 'width: 300px; height: 300px;'>",
    lossImage: "<img src='assets/images/geoffreywrong.gif' style= 'width: 300px; height: 300px;'>"
},
{
    question: "Which famous DJ plays Will's best friend Jazz?",
    choices: ["Jeff Townes", "Dj Khaled", "John Digweed", "Bassnectar"],
    correct: "Jeff Townes",
    winImage: "<img src='assets/images/jazzright.gif' style= 'width: 300px; height: 300px;'>",
    lossImage: "<img src='assets/images/jazzright.gif' style= 'width: 300px; height: 250px;'>"
},

];




var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 15,
    correct: 0,
    incorrect: 0,
    unAnswered: 0,

    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            $("#subwrapper").html('<h2> AWW, OUT OF TIME!</h2>');
            game.timeUp();
        }
        

    },

    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").html("<h2>TIME:  <span id = 'counter' style= 'color: red'> 15 </span> Seconds</h2>");
        $("#subwrapper").append("<h2>" + questions[game.currentQuestion].question + "</h2>");
        for (i = 0; i < questions[game.currentQuestion].choices.length; i++) {
            $("#subwrapper").append('<button class = "answer-button" id = "button- ' + i +
                '"data-name = "' + questions[game.currentQuestion].choices[i] + '">' + questions[game.currentQuestion].choices[i] + '</button>');
        }

    },

    nextQuestion: function () {

        game.counter = 15;
        $("#counter").html(game.counter);
        game.currentQuestion++
        game.loadQuestion();
        $("#image-view").empty();

    },



    timeUp: function () {
        var timeImg = "<img src='assets/images/timeup.gif' style='width: 300px; height: 300px;'>"
        clearInterval(timer);
        game.unAnswered++
        $("#subwrapper").html('<h2> AWW, OUT OF TIME!</h2>');
        $("#subwrapper").append("<h3>The Correct Answer was : " +
            questions[game.currentQuestion].correct + "</h3>")
        $("#image-view").html(timeImg);
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results(3 * 1000));
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }

    },

    results: function () {
        clearInterval(timer);
        $("#subwrapper").html("<h3>Correct: " + game.correct + "</h3");
        $("#subwrapper").append("<h3>Incorrect: " + game.incorrect + "</h3");
        $("#subwrapper").append("<h3>Unanswered: " + game.unAnswered + "</h3");
        $("#subwrapper").append("<button id = 'reset'>RESET</button>");

        if (game.correct > game.incorrect) {
            $("#subwrapper").append('<h2> Hey, you know your stuff !</h2>');
            $("#image-view").html("<img src='assets/images/winner.gif'>");
        }  if (game.incorrect > game.correct) {
            $("#subwrapper").append('<h2> Better luck next time!</h2>');
            $("#image-view").html("<img src='assets/images/loser.gif'>");
        }   if (game.incorrect + game.unAnswered > game.correct) {
            $("#subwrapper").append('<h2> Better luck next time!</h2>');
            $("#image-view").html("<img src='assets/images/loser.gif'>");
        } if ( game.unAnswered === questions.length) {
            $("#subwrapper").append('<h2> Uhhh, This is embarrasing!</h2>');
            $("#image-view").html("<img src='assets/images/loser.gif'>");
        } if (game.correct === questions.length) {
            $("#subwrapper").append('<h2> You have made Uncle Phil Proud !</h2>');
            $("#image-view").html("<img src='assets/images/winner.gif'>");
        }
    },

    clicked: function (e) {
        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQuestion].correct) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }

    },

    answeredCorrectly: function () {
        console.log("YOU GOT IT");
        clearInterval(timer);
        game.correct++;
        $("#subwrapper").html('<h2> YOU GOT IT !</h2>');
        $("#image-view").html(questions[game.currentQuestion].winImage);
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },



    answeredIncorrectly: function () {
        console.log("YOU MISSED IT");
        clearInterval(timer);
        game.incorrect++;
        $("#subwrapper").html('<h2> YOU MISSED IT !</h2>');
        $("#subwrapper").append("<h3>The Correct Answer was : " +
            questions[game.currentQuestion].correct + "</h3>")
        $("#image-view").append(questions[game.currentQuestion].lossImage);
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    reset: function () {
        game.questions = questions;
        game.currentQuestion = 0;
        game.counter = 15;
        game.correct = 0;
        game.incorrect = 0;
        game.unAnswered = 0;
        game.loadQuestion();
        $("#image-view").empty();

    }
}


