const readline = require('readline-sync');
const gameState = require('../gameState');

function memoryChallenge(){

  const words = [
    ["pikachu", "electric", "yellow", "thunder"],
    ["charmander", "fire", "tail", "flame"],
    ["squirtle", "water", "shell", "blue"],
    ["bulbasaur", "grass", "plant", "green"],
    ["pokeball", "catch", "pokemon", "trainer"]
];

    words.forEach(w => {
        console.log("\nMemorize these words:");
        console.log(w.join(" | "))

        readline.question("\nPress ENTER when you are ready")

        console.clear();

        let answer = readline.question("Write the words you remenber separated by comma:")

        

        if(answer === w.join(", ")){
        console.log("Correct!")
        gameState.addPoints (10)
        } else {
            console.log("Wrong the rigth answer is" + words.w.join(", "));
            gameState.loseLife()
        }

    })
}

module.exports = memoryChallenge
