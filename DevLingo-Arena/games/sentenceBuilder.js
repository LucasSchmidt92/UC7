const readline = require('readline-sync');
const gameState = require('../gameState');

function sentenceBuilder() {

    const challenge = [
    {
        words: ["developer", "is", "He", "a"],
        correct: "He is a developer"
    },
    {
        words: ["friend", "my", "She", "is"],
        correct: "She is my friend"
    },
    {
        words: ["friend", "my", "She", "is"],
        correct: "She is my friend"
    },

    
    ];

    challenge.forEach (c => {
    console.log("Reorder the words to form a sentence:");
    console.log(c.words.join(" | "))
    })

    let answer = readline.question("Write the sentence in the rigth order: ");

    if(answer === c.answer) {
        console.log("Correct!");
        gameState.addScore(10);
    } else {
        console.log("Wrong! Correct sentence:", c.answer)
        gameState.loseLife();
    }

    readline.question("Press ENTER to continue...");
}

module.exports = sentenceBuilder;
