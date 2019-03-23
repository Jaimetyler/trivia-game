console.log("I'm working !")

//make a variable that holds start time of question timer
var time = 15

//make a variable to keep track of what number question user is on
var questionNumber = 0

//make a variable to keep track of the number of correct answers to call at the end of the game
var correctAnswers = 0

//make a variable to keep track of the number of incorrect answers
var incorrectAnswers = 0

//create objects that contain the question, choices and correct answer/image for each question.(the image may come from somewhere else.need to look that up).
var questions = [{question: "In the scorebook, position 1 is the pitcher. This big right hander won more games in Milwaukee than any Brave other than Hall of Famer Warren Spahn. He was the MVP of the 1957 World Series and claimed three of the Champions' four wins. Who was he?",
                  choices: ["Lew Burdette","Bobby Mercer","Larry Jones","Russ Mills"],
                correct: "Lew Burdette",
                image: "<img src='assets/images/celebrate.jpg'>"
            },
            {question: "What year did the Braves win the World Series?",
                  choices: ["1995","2000","1991","1989"],
                correct: "1995",
                image: "<img src='assets/images/celebrate.jpg'>"
            },
            {question: "What year did the Braves win the World Series?",
                  choices: ["1995","2000","1991","1989"],
                correct: "1995",
                image: "<img src='assets/images/celebrate.jpg'>"
            },
            {question: "What year did the Braves win the World Series?",
                  choices: ["1995","2000","1991","1989"],
                correct: "1995",
                image: "<img src='assets/images/celebrate.jpg'>"
            },
            {question: "What year did the Braves win the World Series?",
                  choices: ["1995","2000","1991","1989"],
                correct: "1995",
                image: "<img src='assets/images/celebrate.jpg'>"
            },
            {question: "What year did the Braves win the World Series?",
                  choices: ["1995","2000","1991","1989"],
                correct: "1995",
                image: "<img src='assets/images/celebrate.jpg'>"
            },
            {question: "What year did the Braves win the World Series?",
                  choices: ["1995","2000","1991","1989"],
                correct: "1995",
                image: "<img src='assets/images/celebrate.jpg'>"
            },
            {question: "What year did the Braves win the World Series?",
                  choices: ["1995","2000","1991","1989"],
                correct: "1995",
                image: "<img src='assets/images/celebrate.jpg'>"
            },
            {question: "What year did the Braves win the World Series?",
                  choices: ["1995","2000","1991","1989"],
                correct: "1995",
                image: "<img src='assets/images/celebrate.jpg'>"
            },
            {question: "What year did the Braves win the World Series?",
                  choices: ["1995","2000","1991","1989"],
                correct: "1995",
                image: "<img src='assets/images/celebrate.jpg'>"
            }
        ];



 
//make a function for the starting time.
    //starting the game is going to load an object into the correct #'s of row2.
    //starting the game will also start the time


    
//make a timer function that will be called each time a new question loads.


// make a function that will load a new question with choices into the html. 

function questionContent() {
    $("#question").text(questions[questionNumber].question);
    $("#choice1").text(questions[questionNumber].choices[0]);
    $("#choice2").text(questions[questionNumber].choices[1]);
    $("#choice3").text(questions[questionNumber].choices[2]);
    $("#choice4").text(questions[questionNumber].choices[3]);
    console.log(questions)

    //i need a for loop here to run through each question
 }

// make a function that will display "That's Right! with an image and also increase the correct answers count by 1.
function rightAnswer () {
    //displays message 
    $(".card").html("<h2>You got it right!</h2>");
		correctAnswers++;
		var correctGuess = questions[questionNumber].correct;
		$(".card").append("The answer was " + correctGuess  + questions[questionNumber].image);
			 
		setTimeout(nextQuestion, 5000);
        questionNumber++;
        console.log(questions);
        console.log("right answer is working")
  
}


//make a function that will display "Incorrect! the correct answer is...insert the correct answeer" with a wrong answer image and also increase the incorrect answers count by 1. 
function wrongAnswer () {
    //displays a wrong message ,adds to incorrectAnswers,shows loser image
    $(".card").html("<h2>Nah, That's not it!</h2>");
		incorrectAnswers++;
		var correctGuess = questions[questionNumber].correct;
		$(".card").append("The answer was " + correctGuess  + questions[questionNumber].image);
			 
		setTimeout(nextQuestion, 5000);
        questionNumber++;
        console.log("wrong answer is working")
 }
  

//make a function that will display a message and trigger the next question when the time runs out.
 function outOfTime () {

    $(".card").html("<h2>You ran out of time!</h2>");
		incorrectAnswers++;
		var correctGuess = questions[questionNumber].correct;
		$(".card").append("The answer was " + correctGuess  + questions[questionNumber].image);
			 
		setTimeout(nextQuestion(), 5000);
        questionNumber++;
        console.log("outofTime is working")

 }
 

 function results () {
     if (correctAnswers === questions.length) {
         var resultMessage = "Whoa! You really know your stuff!";
    } else if (correctAnswers > incorrectAnswers) {
         var resultMessage = "Not bad, Not bad. Better than a .500 Average";
     } else {
         var resultMessage = "Hmmm, thats pretty bad..."
     }
     //now need to make these show up on the page
     $(".card").html("<h2>" + resultMessage + "</h2>" + "<h2>" + "You got: " + correctAnswers + " right" + "</h2>" + "<h2>" + "You got: " + incorrectAnswers + " wrong" + "</h2>");
     $(".row").append("<h2 id='startOver'> Start Over?</h2>");
     reset();
     ("#startover").click(nextQuestion);
     console.log("results page is working")
}

     
//make a function that will  dispay the amount of correct and incorrect answers and then wait a few seconds to reset the game. 
    //the reset function should be set on a delay after the dispaying of the correct/incorrect answers. 
 function timer () {
        clock = setInterval(countDown, 1000);
        function countDown() {
        if (time < 1) {
        clearInterval(clock);
        outOfTime()	
    }
        if (time > 0) {
        time--;
    }
        $("#game-timer").html("You Have " + time + " seconds remaining");
    }
}
    

function nextQuestion (){
    //needs to start new timer and load new questions/choices
    if (questionNumber < questions.length) {
        time = 15;
        $("#game-timer").html("You have " + time + " seconds left!");
        questionContent();
        timer();
        
        console.log("nextQuestion working");    
    }else {
        results();
        console.log(questionNumber + "shits working,yo");
    }
}  
    
function reset () {
    questionNumber = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
}

function startGame () {
    $("#game-timer").html("You have " + time + " seconds left!");
    $("#start").hide();

    questionContent();
    timer();
    
}


$("#start").click(startGame());
    
       
$("#.row").on("click", ".answer-list", (function() {
    // alert("clicked!");
    
    var userGuess = $(this).text();
    if (userGuess === questions[questionNumber].correctAnswer) {
        clearInterval(clock);
        rightAnswer();
    }else {
        clearInterval(clock);
        wrongAnswer();



 }}));
