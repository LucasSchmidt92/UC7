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
    words: ["happy", "are", "They", "today"],
    correct: "They are happy today"
},
{
    words: ["coffee", "like", "I"],
    correct: "I like coffee"
},
{
    words: ["school", "to", "go", "We"],
    correct: "We go to school"
},
{
    words: ["dog", "my", "is", "big"],
    correct: "My dog is big"
},
{
    words: ["playing", "is", "He", "soccer"],
    correct: "He is playing soccer"
},
{
    words: ["yesterday", "worked", "I"],
    correct: "I worked yesterday"
},
{
    words: ["home", "are", "They", "at"],
    correct: "They are at home"
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
