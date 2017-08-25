document.addEventListener("DOMContentLoaded", function() {
  var gameState = {
    names: ["pikachu","squirtle", "charmander", "bulbasour"]
  }
  var userInput = "";
  var pathToNames = gameState.names;
  var getRandomName = function(){
    return pathToNames[Math.floor(Math.random() * pathToNames.length)];
    console.log(gameState.names)
  }
  // TODO: have a press anykey function

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
  // make arr string "_" variable
  // var arr = "";
  var dash = "_";
  var arr = [];
  // add as many "_" as letters
  // loop the number of the words le ngth
  for (var i = 0; i < nameLength; i++) {
    // add a dash
    console.log(currentName);
    arr = arr.concat(dash);
    // "_ _ "

  }
  // console.log("currentName", currentName);

  // "_ _ _ _ _ _ _ _ _ _ "

  currentName.length = "_ ";
  document.querySelector("#question").innerHTML = arr.join(" ");


  // TODO: replace _ with correct letters in corret spots
  // function that take in the current state of the word and the letter they guessed
  function correctWord() {
    console.log(currentName);
    if (userInput === currentName.length) {
    } else {
    }
  }
  correctWord()


  var isLetterInWord = function (letter, word) {
    var flag = false;
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        console.log("letter is in the word");
        arr[i] = word[i];
        flag = true;
      }
    }
    return flag;
  }

  document.onkeyup = function(event) {
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("userInput", userInput);
    console.log("the current word on keyup", currentName)
    console.log("arr before", arr);
    isLetterInWord(userInput, currentName);
    console.log("arr after", arr);
    document.querySelector("#question").innerHTML = arr.join(" ");
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
