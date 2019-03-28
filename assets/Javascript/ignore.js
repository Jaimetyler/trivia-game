$(document ).ready(function(){



    console.log("I'm working !")
    
    //make a variable that holds start time of question timer
    var time = 25
    
    var questionNumber = 0
    //make a variable to keep track of the number of correct answers to call at the end of the game
    var correctAnswers = 0
    
    //make a variable to keep track of the number of incorrect answers
    var incorrectAnswers = 0
    
    var unansweredQuestions = 0
    
    //create objects that contain the question, choices and correct answer/image for each question.(the image may come from somewhere else.need to look that up).
    var questions = [{question: "Which player has been an Atlanta Brave third baseman?",
                      choices: ["Larry Jones","Bobby Mercer","Lew Burnett","Russ Mills"],
                    correct: "Larry Jones"
                    
                },
                {question: "What year did the Braves win the World Series?",
                      choices: ["1995","2000","1991","1989"],
                    correct: "1995"
                    
                },
                {question: "Which city has the Braves never called home?",
                      choices: ["Chicago","Atlanta","Milwaukee","Boston"],
                    correct: "Chicago"
                    
                },
                {question: "What team did Dale Murphy go to after he played for the Atlanta Braves?",
                      choices: ["Philadelphia Phillies","Chicago Cubs","Cincinatti Reds","New York Mets"],
                    correct: "Philadelphia Phillies"
                    
                },
                {question: "Which one of these teams has Bobby Cox managed besides the Braves?",
                      choices: ["Blue jays","Mets","Red Sox","White Sox"],
                    correct: "Blue jays"
                    
                },
               
            ];
    
var images = [{
    winImage: "<img src='assets/images/celebrate.jpg'>",
    lossImage: "<img src='assets/images/braves-lose.jpg'>"
}]

    //just coulnd't figure out the best way to do this. tried to loop through, tried random.math formulas but ran into problems with the same questions coming up twice. 

function questionContent() {

        // for (i = 0; i < questions.length; i++) 
        $("#questions").append("<p>" + 
        questions[0].question + 
        "<p class='choices'>" + 
        questions[0].choices[0] + 
        "<p class='choices'>" + 
        questions[0].choices[1] + 
        "<p class='choices'>" + 
        questions[0].choices[2] + 
        "</p><p class='choices'>" + 
        questions[0].choices[3] + 
        "<p class='choices'>" + 
        "</p>");
        console.log(questions[0].choices[3])
        $("#questions").append("<p>" + 
        questions[1].question + 
        "<p class='choices'>" + 
        questions[1].choices[0] + 
        "<p class='choices'>" + 
        questions[1].choices[1] + 
        "<p class='choices'>" + 
        questions[1].choices[2] + 
        "</p><p class='choices'>" + 
        questions[1].choices[3] + 
        "<p class='choices'>" + 
        "</p>");

        $("#questions").append("<p>" + 
        questions[2].question + 
        "<p class='choices'>" + 
        questions[2].choices[0] + 
        "<p class='choices'>" + 
        questions[2].choices[1] + 
        "<p class='choices'>" + 
        questions[2].choices[2] + 
        "</p><p class='choices'>" + 
        questions[2].choices[3] + 
        "<p class='choices'>" + 
        "</p>");

        $("#questions").append("<p>" + 
        questions[3].question + 
        "<p class='choices'>" + 
        questions[3].choices[0] + 
        "<p class='choices'>" + 
        questions[3].choices[1] + 
        "<p class='choices'>" + 
        questions[3].choices[2] + 
        "</p><p class='choices'>" + 
        questions[3].choices[3] + 
        "<p class='choices'>" + 
        "</p>");

        $("#questions").append("<p>" + 
        questions[4].question + 
        "<p class='choices'>" + 
        questions[4].choices[0] + 
        "<p class='choices'>" + 
        questions[4].choices[1] + 
        "<p class='choices'>" + 
        questions[4].choices[2] + 
        "</p><p class='choices'>" + 
        questions[4].choices[3] + 
        "<p class='choices'>" + 
        "</p>");
        
     
}

 function timer () {
        clock = setInterval(countDown, 1000);
        function countDown() {
        if (time < 1) {
        clearInterval(clock);
        outOfTime();	
    }
        if (time > 0) {
        time--;
    }
        $("#game-timer").html("You Have " + time + " seconds remaining");
    }
    console.log("timer restarted")
}
    

function outOfTime () {

    $(".card").html("<h2>Game Over!</h2>" + "<p>" + "Correct Answers: " + correctAnswers + "</p>" + "<p>" + "Incorrect Answers: " + incorrectAnswers + "</p>"+ "<p>" + "Unanswered Questions: " + unansweredQuestions + "</p>");
	setTimeout(reset(), 5000)
	$(".row").html(lossImage)

}

function reset () {
    clearInterval(clock)
    unansweredQuestions = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;

    startGame()
}


function startGame () {
    $("#game-timer").html("You Have " + time + " seconds remaining");
    timer (); 
    questionContent();
    
}



$("#start").click(startGame());
var userGuess = $(".choices").val();

$("#questions").on("click", ".choices", (function() {
    
 //don't know what is up with this...cannot get my correct answer to log as anything other than undefined. its throwing off the entire rest of the gaming process
    
    if (userGuess === questions[questionNumber].correct) {
        correctAnswers++
        
    }else if (userGuess !== questions[questionNumber].correct) {
       incorrectAnswers++
    }else {
        unansweredQuestions++
    }
    console.log("incorrect: " + incorrectAnswers)
    console.log("correct: " + correctAnswers)
    console.log("correct answer: " + questions.correct)
    
}))

})
