const readline = require('readline-sync');
const gameState = require('../gameState');

function completeSentence(){
const sentences = [
    { 
        text: "She ____ my sister.",
      answer: "is" },

    { 
        text: "I ____ a developer.",
      answer: "am" },

    { 
        text: "Internacional of Porto Alegre ____ world champion.",
      answer: "is" },
    { 
        text: "Pikachu ____ electric.", 
        answer: "is" 
    },
    { 
        text: "I ____ a Pokémon trainer.", 
        answer: "am" 
    },
    { 
        text: "Internacional ____ a big team.", 
        answer: "is" 
    }
];

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
