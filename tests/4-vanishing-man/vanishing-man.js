/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `

  O   
 /|\\\  
 / \\\  

=========`,
  `

  O      
 /|\\\   
 /       


=========`,
  `

  O      
 /|\\\   


=========`,
  `

  O      
 /|      


=========`,
  `

  O      
  |      


=========`,
  `

  O      



=========`,
  `





=========`,
];

class VanishingMan {
  constructor(secretWord) {
    this.guess = 6;
    this.letterGus = [];
    this.gameState = "playing";
    this.secretWord = secretWord.toLowerCase().split("");
  }

  computeGameState() {
    let won = this.secretWord.every(
      (letter) => this.letterGus.includes(letter) || letter === " "
    );
    if (this.guess === 0) {
      this.gameState = "lost";
    } else if (won) {
      this.gameState = "won";
    } else {
      this.gameState = "playing";
    }
  }
  getSecretWordPuzzle() {
    return this.secretWord
      .map((letter) => {
        if (this.letterGus.includes(letter) || letter === " ") {
          return letter;
        } else {
          return "#";
        }
      })
      .join("");
  }
  b;
  getGameStateMessage() {
    if (this.gameState === "playing") {
      return `There is a total of ${this.guess} guesses remaining:\n${
        this.guess === 6 ? ASCIIART[ASCIIART.length - 1] : ASCIIART[this.guess]
      }`;
    } else if (this.gameState === "lost") {
      return `Game Over, the word was "${this.secretWord.join("")}":\n${
        ASCIIART[0]
      }`;
    } else {
      return `Winner Winner Chicken Dinner, you won!`;
    }
  }

  submitGuess(guess) {
    guess = guess.toLowerCase();
    const incorrect = !this.secretWord.includes(guess);
    const uniqueGuess = !this.letterGus.includes(guess);
    if (this.gameState !== "playing") {
      return;
    }

    if (uniqueGuess) {
      this.letterGus.push(guess);
    }

    if (incorrect && uniqueGuess) {
      this.guess--;
    }
  }
}

const game = new VanishingMan("hello");

const simulateVanishingMan = (secretWord) => {
  const characters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const game = new VanishingMan(secretWord);

  function playVanishingMan() {
    if (game.gameState !== "playing") {
      return game.getGameStateMessage();
    } else {
      const randInx = Math.floor(Math.random() * 26);
      const guess = characters[randInx];
      game.submitGuess(guess);
      game.computeGameState();
      return playVanishingMan();
    }
  }

  return playVanishingMan();
};
