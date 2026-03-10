const rl = require("readline-sync");
const func = require("../gameState");

function battleRPG() {
  const questions = [
const questions = [
  {
    question: "Complete: I ____ a pharmacist (am / is / are)",
    answer: "am",
  },
  {
    question: "Complete: She ____ my friend (am / is / are)",
    answer: "is",
  },
  {
    question: "Past of 'work'",
    answer: "worked",
  },
  {
    question: "Past of 'study'",
    answer: "studied",
  },
  {
    question: "Complete: I ____ coffee every morning (drink / drinks)",
    answer: "drink",
  },
  {
    question: "Complete: He ____ Pokémon (like / likes)",
    answer: "likes",
  },
  {
    question: "Plural of 'dog'",
    answer: "dogs",
  },
  {
    question: "Male pronoun",
    answer: "he",
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
