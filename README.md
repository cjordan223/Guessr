### [Live Web App Here](https://cjordan223.github.io/Guessr/)

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

 

#### Note

- The game fetches a random word from the Random Word API with a length of five letters. If the word ends with 's', another word is fetched to avoid plural nouns, as the game only accepts singular words.
- The game allows the player six attempts to guess the word. If the word is not guessed within these attempts, the game ends, revealing the correct word.


- Customize the appearance and layout of the game interface by modifying the CSS styles in `css/style.css`.
