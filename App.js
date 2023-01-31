const wordList = [
   { word: "Facebook", hint: "Social media app" },
   { word: "Instagram", hint: "Photo sharing app" },
   { word: "Twitter", hint: "Microblogging app" },
   { word: "Snapchat", hint: "Picture messaging app" },
   { word: "WhatsApp", hint: "Instant messaging app" },
];

const word = wordList[Math.floor(Math.random() * wordList.length)];

let incorrectGuesses = [];
let correctGuesses = [];
let gameOver = false;


