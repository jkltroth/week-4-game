// PSUEDOCODE
// // // // // //

// On page load:
// // 1. Pick a random number for player to guess (between 19 and 120) // Function
// // 2. Each crystal is assigned a random number between 1-12 // Function
// // 3. Wins, losses, and total score all start at 0

// Playing the game:
// // 1. Player clicks on images of crystals
// // 2. Player's total score goes up based on random number assigned to that crystal
// // 3. Player wins if total score matches random number
// // 4. Player loses if total score is greater than random number

// If player wins:
// // 1. "Wins" counter is increased by 1
// // 2. "You won!" is displayed
// // 3. A new random number for player to guess is picked (between 19 and 120) // Function
// // 4. Crystals are reassigned a random number between 1-12 // Function
// // 5. Total score is reset to zero // Function

// If player loses:
// // 1. "Losses" counter is increased by 1
// // 2. "You lost!" is displayed
// // 3. A new random number for player to guess is picked (between 19 and 120) // Function
// // 4. Crystals are reassigned a random number between 1-12 // Function
// // 5. Total score is reset to zero // Function

// // // // // // // // // // // // // // // // // // // // // // // // // // // 

var wins = 0;
var losses = 0;
var totalScore = 0;
var numberToGuess;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;

//function to randomly choose a number to guess between 19 and 120
function randomNumber() {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//function to randomly choose crystal value between 1 and 12    
function randomValue() {
    min = Math.ceil(1);
    max = Math.floor(12);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function for a new  of play
function newRound() {

    // assigns a random number to guess to the numberToGuess variable
    numberToGuess = randomNumber();

    //assigns a random value to each of the crystalValue# variables
    crystalValue1 = randomValue();
    crystalValue2 = randomValue();
    crystalValue3 = randomValue();
    crystalValue4 = randomValue();

    // Total score is set to 0
    totalScore = 0;

    //  Each crystal image is given a data attribute called data-crystalValue set to the value of the crystalValue# variables above.
    $("#crystal_1").attr("data-crystalvalue", crystalValue1);
    $("#crystal_2").attr("data-crystalvalue", crystalValue2);
    $("#crystal_3").attr("data-crystalvalue", crystalValue3);
    $("#crystal_4").attr("data-crystalvalue", crystalValue4);

    // Updates values for numberToGuess, totalScore, wins, and losses in html
    $("#numberToGuess").text(numberToGuess);
    $("#totalScore").text(totalScore);
    $("#wins").text(wins);
    $("#losses").text(losses);

    console.log(numberToGuess);

};

// When the document is ready...
$(document).ready(function () {

    // Run the new game function
    newRound();

});

// When a crystal button is clicked...
$(".crystalButton").on("click", function () {

    // The clickedCrystalValue variable is given the value of the clicked crystal
    let clickedCrystalValue = ($(this).attr("data-crystalvalue"));
    // The value of the clickedCrystalValue variable is coverted to an integer
    clickedCrystalValue = parseInt(clickedCrystalValue);

    // The value of the clickedCrystalValue variable is added to the totalScore variable
    totalScore += clickedCrystalValue;
    // totalScore is pushed to the totalScore id element
    $("#totalScore").text(totalScore);

    // If the total score ever equals the number to guess...
    if (totalScore === numberToGuess) {

        // Increase wins by one
        wins++;

        // Updates winOrLoss id in html to display "You won!"
        alert("You won!");

        //Run the new game function
        newRound();

    // Else if the total score is ever greater than the number to guess... 
    } else if (totalScore > numberToGuess) {

        // Increase losses by one
        losses++;

        // Updates winOrLoss id in html to display "You lost..."
        alert("You lost...");

        // Run the new game function
        newRound();

    };

});