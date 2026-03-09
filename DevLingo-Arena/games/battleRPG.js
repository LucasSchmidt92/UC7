const readline = require('readline-sync');
const gameState = require('../gameState');

function battleRPG(){
    let enemyHP = 30;
    console.log("\nA Grammar Monster appears!");

    while(enemyHP > 0) {

        console.log("\nEnemy HP:", enemyHP);
        console.log("Answer correctly to attack.");

        let answer = readline.question("Past of 'go': ")

        if (answer.toLowerCase() === "went"){
            console.log('You sucesfully hit the enemy!')
            enemyHP = 10;
        } else {
            console.log("You miss! The monster hits you!");
            gameState.loseLife();
        }
    }

}

module.exports = battleRPG