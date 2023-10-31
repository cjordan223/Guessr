let answer;
let currentGuess = [];
let attempts = 0;

document.addEventListener("DOMContentLoaded", () => {
    fetchRandomWord();
    createBoard();
});

function fetchRandomWord() {
    fetch('https://random-word-api.herokuapp.com/word?number=1&length=5')
        .then(response => response.json())
        .then(words => {
            if (words[0].endsWith('s')) { // if the word ends with 's' then fetch another word
                fetchRandomWord();
            }
            else {
                answer = words[0].toUpperCase();
                console.log(answer); // for debugging 
            }
        })

        .catch(error => console.log('Error fetching word', error));
}


function createBoard() {
    for (let i = 1; i <= 6; i++) {
        const row = document.getElementById(`row${i}`);
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    }
}

function submitGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.toUpperCase();

    if (guess.length !== 5) {
        alert("Guess must be 5 letters");
        return;
    }

    const row = document.getElementById(`row${attempts + 1}`);
    const cells = row.getElementsByClassName("cell");

    for (let i = 0; i < 5; i++) {
        cells[i].innerText = guess[i];
        if (guess[i] === answer[i]) {
            cells[i].style.backgroundColor = "green";
        } else if (answer.includes(guess[i])) {
            cells[i].style.backgroundColor = "yellow";
        } else {
            cells[i].style.backgroundColor = "gray";
        }
    }

    if (guess === answer) {
        showMessage("Congratulations! You've guessed the word!");
        return;
    }

    attempts++;
    if (attempts === 6) {
        showMessage(`Game Over! The word was ${answer}`);
    }

    guessInput.value = "";
}

function showMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.innerText = message;
}
