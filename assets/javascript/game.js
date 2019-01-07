    // Setting array variable for word bank
    var words = [
        "ecstatic",
        "lighthearted",
        "joyful",
        "optimistic",
        "thrilled",
        "upbeat",
        "gleeful",
        "delighted",
        "blissful"
    ]
    //Setting up variables so I can put in html document where I'd like.
    var instructionsText = document.getElementById("instructions");
    var guess = document.getElementById("placeholder");
    var winsText = document.getElementById("wins");
    var numberGuessesText = document.getElementById("number-guesses");
    var guessesText = document.getElementById("guesses");
    var lossesText = document.getElementById("losses");
   
    // Setting variables for number of wins, guesses, etc
    var wins = 0;
    var losses = 0;
    var numberGuesses = 12;
    var lettersUsed = [];
    
    // var replaceLetter;

    // Randomly choosing a word
    var wordChoice = words[Math.floor(Math.random() * words.length)];
    console.log(wordChoice);



    //Putting blank spots where the letters will go.
    var answerArray = [];
    for (var i = 0; i < wordChoice.length; i++) {
        answerArray.push(" _");
        console.log(wordChoice[i]);

    }
    guess.textContent = "Word to guess: " + answerArray.join(' ');
  
   

    // Computer recognizing keys pressed
    document.onkeyup = function(e){

        
        
        // Setting users choice to the key pressed.
        lettersUsed.push(" " + e.key);
  
        // Logging letterChoice to console
        console.log(lettersUsed);

        // Lower number of guesses
        console.log(numberGuesses);
        numberGuesses--;
        console.log(numberGuesses);   
    
    
       

        numberGuessesText.textContent = "Numer of guesses left: " + numberGuesses;
        guessesText.textContent = "Letters already used: " + lettersUsed;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;


        // //Trying to get it to recognize letter choice and replace underscores with answers.
        // if (wordChoice == "ecstatic"){
        //     if (e.key === "e") {
        //         answerArray = ["_", "_", "_", "_", "_", "_", "_", "_"];
        //         answerArray.splice (0, 1, "e");
        //         console.log(answerArray);
        //         guess.textContent = "Word to guess: " + answerArray.join(' ');
        //     }
        //     if (e.key === "c") {
        //         answerArray = ["_", "_", "_", "_", "_", "_", "_", "_"];
        //         answerArray.splice(1, 1, "c");
        //         answerArray.splice(7, 1, "c");
        //         console.log(answerArray);
        //         guess.textContent = "Word to guess: " + answerArray.join(' ');
        //     }
        //     if (e.key === "s") {
        //         answerArray = ["_", "_", "_", "_", "_", "_", "_", "_"];
        //         answerArray.splice(2, 1, "s");
        //         console.log(answerArray);
        //         guess.textContent = "Word to guess: " + answerArray.join(' ');
        //     }
        //     if (e.key === "t") {
        //         answerArray = ["_", "_", "_", "_", "_", "_", "_", "_"];
        //         answerArray.splice(3, 1, "t");
        //         answerArray.splice(5, 1, "t");
        //         console.log(answerArray);
        //         guess.textContent = "Word to guess: " + answerArray.join(' ');
        //     }
        //     if (e.key === "a") {
        //         answerArray = ["_", "_", "_", "_", "_", "_", "_", "_"];
        //         answerArray.splice(4, 1, "a");
        //         console.log(answerArray);
        //         guess.textContent = "Word to guess: " + answerArray.join(' ');
        //     }
        //     if (e.key === "i") {
        //         answerArray = ["_", "_", "_", "_", "_", "_", "_", "_"];
        //         answerArray.splice(6, 1, "i");
        //         console.log(answerArray);
        //         guess.textContent = "Word to guess: " + answerArray.join(' ');
        //     }

        //     else {
        //         var answerArray = [];
        //         for (var i = 0; i < wordChoice.length; i++) {
        //             answerArray.push(" _");
        //             console.log(wordChoice[i]);
            
        //         }
        //         guess.textContent = "Word to guess: " + answerArray.join(' ');
        //     }
        // }

    






          // Resetting number of guesses and changing the word to guess and adding losses.
          if (numberGuesses < 1){
            
            // If number of guesses runs out, add a "loss"
            losses ++;
            

            // Refresh number of guesses
            numberGuesses = 12

            // Refresh what letters have been used
            lettersUsed = [""];

            // Select a new word
            var wordChoice = words[Math.floor(Math.random() * words.length)];
            console.log(wordChoice);
       
            var answerArray = [];
            for (var i = 0; i < wordChoice.length; i++) {
                answerArray.push(" _");
                console.log(wordChoice[i]);
            }
            
            guess.textContent = "Word to guess: " + answerArray.join(' ');

        }

        numberGuessesText.textContent = "Numer of guesses left: " + numberGuesses;
        guessesText.textContent = "Letters already used: " + lettersUsed;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;

    }

        
    
    

    numberGuessesText.textContent = "Numer of guesses left: " + numberGuesses;
    guessesText.textContent = "Letters already used: " + lettersUsed;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;




        //check for letters on chosen word
        //make letters appear in place of underscores
        //when word is finished, add a "win"
        
        

    