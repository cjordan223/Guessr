### Guessr Game

Guessr is a simple word guessing game implemented in JavaScript. The game randomly selects a word from the [Random Word API](https://random-word-api.herokuapp.com/) and challenges the player to guess it within a limited number of attempts.

#### Usage

1. **Game Board:** The game board consists of six rows, each containing five cells. Each cell represents a letter in the word being guessed.

2. **Input Field:** Enter your guess in the input field provided. Guesses must be exactly five letters long.

3. **Submit Button:** Click the "Submit" button to submit your guess.

4. **Feedback:** After submitting a guess, the game provides feedback on the correctness of each letter:
   - Green cell: Correct letter in the correct position.
   - Yellow cell: Correct letter in the wrong position.
   - Gray cell: Incorrect letter.

5. **Message Area:** Messages such as game status and congratulations are displayed below the game board.

#### JavaScript File

- **File:** `js/script.js`
- **Description:** This file contains the JavaScript code for the Guessr game logic, including fetching a random word from the API, creating the game board, handling user input, and providing feedback.

#### HTML File

- **File:** `index.html`
- **Description:** The HTML file contains the structure of the game interface, including the game board, input field, submit button, and message area.

#### CSS File

- **File:** `css/style.css`
- **Description:** The CSS file contains the styling for the game interface, including the layout of the game board, cell appearance, input field, button, and message area.

#### Note

- The game fetches a random word from the Random Word API with a length of five letters. If the word ends with 's', another word is fetched to avoid plural nouns, as the game only accepts singular words.
- The game allows the player six attempts to guess the word. If the word is not guessed within these attempts, the game ends, revealing the correct word.

#### Example Usage

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guessr</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div id="board" class="board">
        <div class="row" id="row1"></div>
        <div class="row" id="row2"></div>
        <div class="row" id="row3"></div>
        <div class="row" id="row4"></div>
        <div class="row" id="row5"></div>
        <div class="row" id="row6"></div>
    </div>
    <input type="text" id="guess-input" placeholder="Enter guess..." maxlength="5">
    <button onclick="submitGuess()">Submit</button>
    <p id="message"></p>
    <script src="js/script.js"></script>
</body>

</html>
```

#### Note

- Customize the appearance and layout of the game interface by modifying the CSS styles in `css/style.css`.
