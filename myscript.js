
// Event listener for Enter key
document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        testUserNum()
    }
});

let message = ""
let messageEl = document.getElementById("messageEl")
let randomNumber = ""
let guessesEl = document.getElementById("guessesEl")
let guess = 0;
let maxGuess = 5;
let pointsEl = document.getElementById("pointsEl")
let points = 0;

function renderGame() {
    randomNumber = Math.floor(Math.random() * 10) +1;
    console.log(randomNumber)
    messageEl.textContent = ""
    guessesEl.textContent = ""
    document.getElementById("userNum").value = "";
    guess = 0
    document.getElementById("userInput").style.display = "block";
}

renderGame()

function testUserNum() {
    let userNum = parseInt(document.getElementById("userNum").value);
    console.log(userNum)

    if (userNum != randomNumber && guess === (maxGuess-1)) {
        guess++;
        message = "Sorry, you're out of guesses :( The number was " + randomNumber
    } else if (userNum < randomNumber) {
        guess++;
        message = "Not quite...try a larger number..."
        console.log("Not quite...try a larger number...")
    } else if (userNum > randomNumber) {
        guess++;
        message = "No...try a smaller number..."
        console.log("No...try a smaller number...")
    } else if (userNum === randomNumber) {
        guess++;
        message = "YES! You guessed correctly in " + guess + " guesses. The number was " + randomNumber
        console.log("YES! You guessed correctly. The number was " + randomNumber);
        points = points + (maxGuess - guess);
        pointsEl.textContent = "Points: " + points;
        document.getElementById("userInput").style.display = "none";
    } else {
        message = "Error"
    }

    messageEl.textContent = message;
    guessesEl.textContent = "Guesses remaining: " + (maxGuess - guess);
    document.getElementById("userNum").value ="";
}

function reset() {
    points = 0;
    pointsEl.textContent = "Points: " + points;
    renderGame();
}
