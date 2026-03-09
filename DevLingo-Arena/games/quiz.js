const readline = require('readline-sync');
const gameState = require('../gameState');

function quiz(){
    const questions = [
        {
            question: " She ____ my friend.",
            options: ["1) am", "2) is", "3) are"],
            answer: "2"
        },
        {
            question: " They ____ students.",
            options: ["1) is", "2) are", "3) am"],
            answer: "2"
        },

        {
            question: " I ___ tired yesterday, because ____ played the soccer",
            options: ["1) is/they", "2) are/we", "3) was/I"],
            answer: "3"
        },
  
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