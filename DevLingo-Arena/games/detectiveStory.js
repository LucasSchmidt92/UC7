const readline = require('readline-sync');
const gameState = require('../gameState');

function detectiveStory() {

    const questions = [
        {
            question: "Red ____ the color that represents the biggest team in Porto Alegre!",
            options: "1 - are | 2 - is | 3 - were",
            answer: "2",
            clue: "He is the captain of the team"
        },
        {
            question: "He ____ many goals last season.",
            options: "1 - score | 2 - scored | 3 - scores",
            answer: "2",
            clue: "He is very good at penalties"
        },
        {
            question: "He ____ for Shakhtar Donetsk.",
            options: "1 - play | 2 - played | 3 - playing",
            answer: "2",
            clue: "He played for Shakhtar Donetsk"
        },
        {
            question: "He ____ many goals against the rival team.",
            options: "1 - score | 2 - scored | 3 - scores",
            answer: "3",
            clue: "He often scores against the rival"
        },
        {
            question: "He ____ an important player for Internacional.",
            options: "1 - is | 2 - are | 3 - were",
            answer: "1",
            clue: "The fans call him the magician"
        }
    ];

    const guess = {
        clues: [],
        options: ["1 - Alan Patrick | 2 - Enner Valencia | 3 - Rafael Borré"],
        answer: "1"
    };

    questions.forEach(q => {
        console.log(q.question);
        console.log(q.options);

        let answer = readline.question("Choose an option: ");

        if(answer === q.answer) {
            console.log("Clue discovered!");
            guess.clues.push(q.clue);
        } else {
            console.log("Wrong answer!");
            gameState.loseLife();
        }
    });

    readline.question("\nPress ENTER to continue...");
}

module.exports = detectiveStory;
