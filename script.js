document.getElementById("start-game").onclick = function() {
    startGame();
};

function startGame() {
    document.getElementById("game-area").style.display = "block";
    document.getElementById("start-game").style.display = "none";
}

function checkGift(element) {
    const isCorrect = element.getAttribute("data-correct") === "true";
    if (isCorrect) {
        showMessage();
    } else {
        alert("Oops! Try picking a different gift!");
    }
}

function showMessage() {
    document.getElementById("game-area").style.display = "none";
    document.getElementById("message").style.display = "block";
}
