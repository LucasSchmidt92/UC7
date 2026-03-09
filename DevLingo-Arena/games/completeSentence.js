const readline = require('readline-sync');
const gameState = require('../gameState');

function completeSentence(){
    const sentences = [
        { text: "She ____ my syster.",
        answer: "is" },
        { text: "I ____ a developer.", 
        answer: "am" },
         {text: "Internacional of Porto Alegre _____ word champions.",
         answer:"is"}
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