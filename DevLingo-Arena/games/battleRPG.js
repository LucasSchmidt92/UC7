const rl = require("readline-sync");
const func = require("../gameState");

function battleRPG() {
  const questions = [
{
    question: "Past of 'catch'",
    answer: "caught",
},
{
    question: "Pikachu ____ electric: is / are / am",
    answer: "is",
},
{
    question: "Write the contraction of 'I am'",
    answer: "i'm",
},
{
    question: "Past of 'win'",
    answer: "won",
}
];
  ];
  let loop = true;
  let indx_Loop = 0;
  let enemyHP = 30;
  let questions_Loop = [];

  for (let i = 0; i < 3; i++) {
    while (loop) {
      let indx = Math.floor(Math.random() * questions.length);
      if (questions_Loop.length > 0) {
        questions_Loop.forEach((quest) => {
          if (questions[indx - 1].answer !== quest.answer) {
            loop = false;
          } else {
            loop = true;
          }
        });
      }
    }
    questions_Loop.push(questions[indx - 1]);
  }

  console.log("An Enemy appears!");
  while (enemyHP > 0) {
    console.log("Monster's HP: " + enemyHP);
    console.log("Answer correctly to attack!");

    let answer = rl.question(`${questions_Loop[indx_Loop].question}: `);

    if (answer === questions_Loop[indx_Loop].answer) {
      console.log("Correct!");
      func.addPoints(10);
    } else {
      console.log("Wrong! Correct answer: " + questions_Loop[indx_Loop].answer);
      func.loseLife();
    }
    indx_Loop++;
  }
}

module.exports = battleRPG;
