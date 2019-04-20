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
    winImage: "assets/images/drumsWin.gif",
    lossImage: "<img src='assets/images/braves-lose.jpg'>"
},
{
    question: "What year did the Braves win the World Series?",
    choices: ["1995", "2000", "1991", "1989"],
    correct: "1995",
    winImage: "<img src='assets/images/celebrate.jpg'>",
    lossImage: "<img src='assets/images/braves-lose.jpg'>"
},
{
    question: "In the episode 'The Mother of all Battles,' Ashley has a bully at school. What's the bully's name?",
    choices: ["Rachelle", "Isabelle", "Ingrid", "Paula"],
    correct: "Paula",
    winImage: "<img src='assets/images/celebrate.jpg'>",
    lossImage: "<img src='assets/images/braves-lose.jpg'>"
},
{
    question: "In the very first episode, 'The Fresh Prince Project', who does Will confuse Geoffrey with?",
    choices: ["Carlton", "Uncle Phil", "Nicky", "Aunt Viv"],
    correct: "Uncle Phil",
    winImage: "<img src='assets/images/celebrate.jpg'>",
    lossImage: "<img src='assets/images/braves-lose.jpg'>"
},
{
    question: "Which famous DJ plays Will's best friend Jazz?",
    choices: ["Jeff Townes", "Dj Khaled", "John Digweed", "Bassnectar"],
    correct: "Jeff Towes",
    winImage: "<img src='assets/images/celebrate.jpg'>",
    lossImage: "<img src='assets/images/braves-lose.jpg'>"
},

];




var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unAnswered: 0,

    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            alert("OUT OF TIME!");
            game.timeUp();
        }


    },

    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").html("<h2>TIME REMAINING  <span id = 'counter'> 30 </span>Seconds</h2>");
        $("#subwrapper").append("<h2>" + questions[game.currentQuestion].question + "</h2>");
        for (i = 0; i < questions[game.currentQuestion].choices.length; i++) {
            $("#subwrapper").append('<button class = "answer-button" id = "button- ' + i +
                '"data-name = "' + questions[game.currentQuestion].choices[i] + '">' + questions[game.currentQuestion].choices[i] + '</button>');
        }
        
    },

    nextQuestion: function () {

        game.counter = 30;
        $("#counter").html(game.counter);
        game.currentQuestion++
        game.loadQuestion();

    },



    timeUp: function () {
        clearInterval(timer);
        $("#subwrapper").html('<h2> AWW, OUT OF TIME!</h2>');
        $("#subwrapper").append("<h3>The Correct Answer was : " +
            questions[game.currentQuestion].correct + "</h3>")

        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results(3 * 1000));
        } else {
            setTimeout(game.nextQuestion(3 * 1000));
        }

    },

    results: function () {
        clearInterval(timer);
        $("#subwrapper").html("<h3>Correct: " + game.correct + "</h3");
        $("#subwrapper").append("<h3>Incorrect: " + game.incorrect + "</h3");
        $("#subwrapper").append("<h3>Unanswered: " + game.unAnswered + "</h3");
        $("#subwrapper").append("<button id = 'reset'>RESET</button>");
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
        $("#image-view").html(questions[game.currentQuestion].question.winImage);
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
        $("#image-view").append(questions[game.currentQuestion].question.lossImage);
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    reset: function () {
        questions = questions;
        currentQuestion = 0;
        counter = 30;
        correct = 0;
        incorrect = 0;
        unAnswered = 0;
        game.loadQuestion();

    }
}


