const readline = require('readline-sync');
const gameState = require('../gameState');

function quiz(){
    const questions = [
    {
        question: " She ____ not happy today.",
        options: ["1) is", "2) are", "3) am"],
        answer: "1"
    },
    {
        question: "Pikachu ____ an electric Pokémon.",
        options: ["1) am", "2) is", "3) are"],
        answer: "2"
    },
    {
        question: "Charizard ____ very strong.",
        options: ["1) is", "2) are", "3) am"],
        answer: "1"
    },
    {
        question: "Alan Patrick ____ the captain yesterday.",
        options: ["1) was", "2) were", "3) is"],
        answer: "1"
    },
    {
        question: "The fans ____ very happy last game.",
        options: ["1) was", "2) were", "3) is"],
        answer: "2"
    }
];

    questions.forEach(q => {

        console.log("question: " + q.question);
        q.options.forEach(opt => console.log(opt));

        let answer = readline.question("Answer: ");

        if(answer === q.answer) {
            console.log("Correct!");
            gameState.addPoints(10);
        } else {
            console.log("Wrong!");
            gameState.loseLife();
        }

    });

}

module.exports = quiz
