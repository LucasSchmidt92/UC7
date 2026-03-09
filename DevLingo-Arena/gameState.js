let score = 0;
let lives = 3;

function addPoints(points){
    return score += points
}

function loseLife(){
    lives --;
}

function getScore(){
    return score;
}

function getLives(){
    return lives;
}

function resetGame(){
    score = o;
    lives= 3;
}

module.exports ={
    addPoints,
    loseLife,
    getScore,
    getLives,
    resetGame
}