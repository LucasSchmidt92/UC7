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
    words: ["Pikachu", "is", "an", "electric", "pokemon"],
    correct: "Pikachu is an electric pokemon"
},
{
    words: ["Internacional", "is", "a", "big", "team"],
    correct: "Internacional is a big team"
},
{
    words: ["Charizard", "is", "very", "strong"],
    correct: "Charizard is very strong"
}
];

    
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
