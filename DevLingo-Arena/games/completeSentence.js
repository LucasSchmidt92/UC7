const readline = require('readline-sync');
const gameState = require('../gameState');

function completeSentence(){
const sentences = [
    { text: "She ____ my sister.",
      answer: "is" },

    { text: "I ____ a developer.",
      answer: "am" },

    { text: "Internacional of Porto Alegre ____ world champion.",
      answer: "is" },

    { text: "They ____ my friends.",
      answer: "are" },

    { text: "We ____ students.",
      answer: "are" },

    { text: "He ____ very happy today.",
      answer: "is" },

    { text: "I ____ tired yesterday.",
      answer: "was" },

    { text: "They ____ at home yesterday.",
      answer: "were" },

    { text: "She ____ coffee every morning.",
      answer: "drinks" },

    { text: "We ____ English at school.",
      answer: "study" }
];
    sentences.forEach(s => {

        console.log("Complete:");
        console.log(s.text);

        let answer = readline.question("Word: ").toLowerCase();

        if(answer === s.answer) {
            console.log("Correct!");
            gameState.addPoints(10);
        } else {
            console.log("Wrong! Correct answer:", s.answer);
            gameState.loseLife();
        }

    });

    readline.question("Press ENTER to continue...");
}


module.exports = completeSentence
