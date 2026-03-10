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
    question: " I ____ not like coffee.",
    options: ["1) do", "2) does", "3) did"],
    answer: "1"
},

{
    question: " They ____ not at home yesterday.",
    options: ["1) are", "2) were", "3) is"],
    answer: "2"
},

{
    question: " We ____ soccer last night.",
    options: ["1) play", "2) played", "3) playing"],
    answer: "2"
},

{
    question: " He ____ to school yesterday.",
    options: ["1) go", "2) goes", "3) went"],
    answer: "3"
},

{
    question: " She ____ watching TV now.",
    options: ["1) is", "2) are", "3) am"],
    answer: "1"
}

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
