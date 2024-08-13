var randomNumber1 = Math.floor(Math.random() * 6) + 1; //  1 - 6

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png

var images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src", randomDiceImage); // Update the first dice image

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //  1 - 6

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png

var images2 = document.querySelectorAll("img")[1];

images2.setAttribute("src", randomDiceImage2); // Update the second dice image

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Mousa 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Mousa 2 Wins!";
} else {
    document.querySelector("h1").textContent = "🙂💚";
} 

    // This code will change the background color of the page to red, yellow, or green based on the dice rolls.
    // It will also display a message indicating the winning player.
var winningColor;
if (randomNumber1 > randomNumber2) {
    winningColor = "black";
} else if (randomNumber1 < randomNumber2) {
    winningColor = "green";
} else {
    winningColor = "blue";
}
document.body.style.backgroundColor = winningColor;
document.querySelector("h2").textContent = "Winning Player: Player " + (winningColor === "red" ? 1 : 2);

// This code will display the total number of wins for each player.
