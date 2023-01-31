const wordList = [
   { word: "Facebook", hint: "Social media app" },
   { word: "Instagram", hint: "Photo sharing app" },
   { word: "Twitter", hint: "Microblogging app" },
   { word: "Snapchat", hint: "Picture messaging app" },
   { word: "WhatsApp", hint: "Instant messaging app" },
];

const word = wordList[Math.floor(Math.random() * wordList.length)];
const wordEl = document.querySelector(".word");
const incorrectGuessesEl = document.querySelector(".incorrect-guesses");
const gameOverEl = document.querySelector(".game-over");
const formEl = document.querySelector("form");
const inputEl = document.querySelector("input");
const submitBtn = document.querySelector("button");

let incorrectGuesses = [];
let correctGuesses = [];
let gameOver = false;

wordEl.innerHTML = word.word
   .split("")
   .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
   .join(" ");

formEl.addEventListener("submit", (event) => {
   event.preventDefault();

   if (!gameOver) {
      const letter = inputEl.value;

      if (word.word.includes(letter) && !correctGuesses.includes(letter)) {
         correctGuesses.push(letter);
         wordEl.innerHTML = word.word
            .split("")
            .map((l) => (correctGuesses.includes(l) ? l : "_"))
            .join(" ");

         if (!wordEl.innerHTML.includes("_")) {
            gameOver = true;
            gameOverEl.innerHTML = "You win!";
         }
      } else if (!incorrectGuesses.includes(letter)) {
         incorrectGuesses.push(letter);
         incorrectGuessesEl.innerHTML = `Incorrect guesses: ${incorrectGuesses.join(
            ", "
         )}`;

         if (incorrectGuesses.length === 8) {
            gameOver = true;
            gameOverEl.innerHTML = `Game over. The word was "${word.word}"`;
         }
      }

      inputEl.value = "";
   }
});