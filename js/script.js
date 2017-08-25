document.addEventListener("DOMContentLoaded", function() {
  // have events set for keyups
  // have a document. ready
  // have conditionals for keyups

  // code...
  // gamestate object
  // the _ _ _ _ _ _ _
  // piikachu
  // squirtle
  var gameState = {
    names: ["Pikachu","Squirtle", "Charmander", "Bulbasour"]

  }

  var pathToNames = gameState.names;
  var getRandomName = function(){
    return pathToNames[Math.floor(Math.random() * pathToNames.length)];
    console.log(gameState.names)
  }

  // have a press anykey section
  // function() {
  //
  // }

  // have function for logic for game
  function scores() {
    // have a score variable
  // win++
  var wins = 0;
  // lose variable too
  // lose++
  var loses = 0;


  }
    // start with _ _ _ _ for same number of words length
    // function to replace _ _ _ _ with correct letters
    // have a section for missed words and a section for correct words
      // have a function that separates them
      // counts down number of tries
    // each word is for a different pokemon with images and sound when gueesed right.
  // objects for stored words
    // math.random for different key value pairs as answers.


  var currentName = getRandomName();
  // get length of word
  var nameLength = currentName.length;
  // make empty string "_" variable
  // var empty = "";
  var dash = "_"
  var empty = []
  // add as many "_" as letters
  // loop the number of the words le ngth
  for (var i = 0; i < nameLength; i++) {
    // add a dash
    console.log(currentName)
    empty = empty.concat(dash);
    // "_ _ "

  }
  // console.log("currentName", currentName);

  // "_ _ _ _ _ _ _ _ _ _ "

  currentName.length = "_ "
  document.querySelector("#question").innerHTML = empty.join(" ");

  userInput = ""
  // TODO: replace _ with correct letters in corret spots
  // function that take in the current state of the word and the letter they guessed
  function correctWord() {
    console.log("test")
    console.log(currentName);
    if (userInput === currentName.length) {
      console.log("you got it");
    } else {
      console.log("not it")
    }
  }


  correctWord()

  console.log(empty)

  function guessLetter(letterPressed) {
    for (var i = 0; i < currentName.length; i++) {
      if (currentName[i] === letterPressed) {
        empty[i] = currentName[i]
      }
    }
  }


  console.log(empty)
  document.querySelector("#question").innerHTML = empty.join(" ")

  document.onkeyup = function(event) {
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    guessLetter(userInput);
  };
    // sample input: "_ _ _ _ ", "c"
    // is the guessed letter part of the string?
    // if guessed letter isnt in the string
    // currentName.includes("guessedLetter")
      // send to guessed letters
      // take away from guesses left
    // else
      // loop over the string
        // compaire current character with guessed letter
        // if they're the same
          // replace _ with correct letter
    // returns string with new game state
    // sample output: "c _ _ _ "
  // replace letter with correct index of the string
  // display in dom

  // TODO: show remaining guesses
  // TODO: show letter already guessed
  // TODO: press any key to get started or restart
  // TODO: refactor the code to be reset in a starting state/screen
});


// replace _ with correct letters
// add wrong letters to other #













/*
                              // examples


  // VARIABLES
  // ==========================================================================
  // The object questions for our quiz game.
  var questions = {
    q1: ["The sky is blue.", "t"],
    q2: ["There are 365 days in a year.", "t"],
    q3: ["There are 42 ounces in a pound.", "f"],
    q4: ["The Declaration of Independence was created in 1745.", "f"],
    q5: ["Bananas are vegetables.", "f"]
  };
  // We start the game with a score of 0.
  var score = 0;
  // Variable to hold the index of current question.
  var questionIndex = 0;
  // Array of questions.
  var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];
  // FUNCTIONS
  // ==============================================================================
  // Function to render questions.
  function renderQuestion() {
    // If there are still more questions, render the next one.
    if (questionIndex <= (questionsArray.length - 1)) {
      document.querySelector("#question").innerHTML = questionsArray[questionIndex][0];
    }
    // If there aren't, render the end game screen.
    else {
      document.querySelector("#question").innerHTML = "Game Over!";
      document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
    }
  }
  // Function that updates the score...
  function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
  }
  // MAIN PROCESS
  // ==============================================================================
  // Calling functions to start the game.
  renderQuestion();
  updateScore();
  // When the user presses a key, it will run the following function...
  document.onkeyup = function(event) {
    // If there are no more questions, stop the function.
    if (questionIndex === questionsArray.length) {
      return;
    }
    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    // Only run this code if "t" or "f" were pressed.
    if (userInput === "t" || userInput === "f") {
      // If they guess the correct answer, increase and update score, alert them they got it right.
      if (userInput === questionsArray[questionIndex][1]) {
        alert("Correct!");
        score++;
        updateScore();
      }
      // If wrong, alert them they are wrong.
      else {
        alert("Wrong!");
      }
      // Increment the questionIndex variable and call the renderQuestion function.
      questionIndex++;
      renderQuestion();
    }
  };

  document.onkeyup = function(event) {
    var userInput = event.key;
    if (userInput === "a") {
      console.log("yo");
  }
  else if (userInput === "") {
  }
  else if (userInput === "") {
  }
  else if (userInput === "") {
  }
  else {

  }
  }
*/
