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
    var letterReplaced;

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

        //turn event of key into lowercase
        key = String.fromCharCode(event.keyCode).toLowerCase();

        // Resetting number of guesses and changing the word to guess and adding losses.
        if (numberGuesses < 1){
            
            losses ++;
            
            numberGuesses = 12

            lettersUsed = [""];

            var wordChoice = words[Math.floor(Math.random() * words.length)];
            console.log(wordChoice);
       
            var answerArray = [];
            for (var i = 0; i < wordChoice.length; i++) {
                answerArray.push(" _");
                console.log(wordChoice[i]);

            //    if (wordChoice[i] === e.key) {
            //        answerArray = answerArray.push(e.key);
            //     guess.textContent = "Word to guess: " + answerArray;                  
            //     }
                
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
        //if number of guesses runs out, add a "loss"
        //select a new word
        //refresh number of guesses

    