// GLOBAL VARIABLES
// ---------------------------------------------------------------------------
// Arrays and Variables for holding data

var wordOptions = ["hot dog", "picnic", "pool party", "watermelon", "fireworks", "ice cream", "barbeque", "hamburguers", "sand castle", "campfire", "road trip", "salad", "fishing", "cook out", "summer camp", "pasta salad", "lemonade", "watching clouds", "kite", "popsicle"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var letterGuessed = "";
var displayArray = [];
var displayWord = "";
var wordArr = "";


// Game counters
var winCount = 0;
var lossCount = 0;
var lifesLeft = 6;


// Random word
        function getWord() {
            var random = Math.floor((Math.random() * wordOptions.length));
            // console.log(random)
            selectedWord = wordOptions[random];

            wordArr = selectedWord.split('');
            displayArray = wordArr;

            console.log("arrays de la palabra" , wordArr);

            var wordLength = wordArr.length;

            for (var i = 0; i < displayArray.length; i++) {
                displayArray[i] = "_ ";
            }

            displayWord = displayArray.join("")
            document.getElementById("word").innerHTML = displayWord;
        }

            function getblanks() {
            var str = selectedWord;
            numBlanks = str.length;   
            }
            getblanks();
            console.log(numBlanks);


            document.onkeyup = function (event) {
            var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

            console.log("user key pressed ", letterGuessed);
            console.log("selected word ", selectedWord)      
             


                function rebuildWordView() {
            // We start with an empty string.
              var wordView = "";

            // Loop through the letters of the word we are trying to guess..
            for (var i = 0; i < this.selectedWord.length; i++) {
            // If the current letter has been guessed, display that letter.
                if (this.letterGuessed.indexOf(this.selectedWord[i]) !== -1) {
                    wordView += this.selectedTheWord[i];
                }
                // If it hasn't been guessed, display a "_" instead.
                else {
                    wordView += "&nbsp;_&nbsp;";
                }
            }

            // Update the page with the new string we built.
            document.querySelector("#word").innerHTML = wordView;
        }
                

        rebuildWordView();

        }

              
          
       

// if (letterGuessed === lettersInWord) {
                    
                //     winCount++;
                //     alert ("win" + winCount);
                // } else {
                //     alert("letter is not in the word");
                // }


// var isLetterinWord = selectedWord.indexOf(letterGuessed);
//     if(isLetterinWord > -1) {
//         console.log("letter match");
//     } else {
//         console.log("letter is not in the word")
//     }


//  VALIDATING THE KEY PRESSED--- DOESN'T WORK - try 1
//     selectedWord.indexOf(letterGuessed) = function isLetterinWord(letter) {
        
//         if (letter > -1) {
//             console.log ("Letter found");
//         } else {
//             console.log ("Letter is not in the word")
//         }
        
//     }
    
//     isLetterinWord(letter);


    // function validateKey (letter) {
//     var isLetterinWord = false;

//     for (var i = 0; i < numBlanks; i++) {
//         if(selectedWord[i] == letter) {
//             isLetterinWord = true;
//             alert("letter found");
//     }
        
//     }

// }


getWord();
console.log(selectedWord);

// Create blanks for each letter in that word (random word) and display the blanks to the user






// Get the user's datakey


//Make sure that the KEY is a letter. Ignore numbers and special letters
// Validate datakey in word. If the data is in the word the user gets one guess... if not the user has - guess
// Check if the user got it right or if the  user lost
// If you use all your guesses you lost. You lost! play again?
// You win


 