let playerName = prompt("Please enter your name", "Player 1")

let heading = document.getElementById("player1");

if(playerName !== null && playerName.trim() !== ""){
    heading.textContent = `${playerName}`;
}else{
    heading.textContent = "";
}
function rollDice(){
    
    const playerOne = Math.floor(Math.random() * 6)+ 1;
    const playerTwo = Math.floor(Math.random() * 6)+ 1;
    
    const player1Dice = document.getElementById("player1Img");
    const player2Dice = document.getElementById("player2Img");
    
    player1Dice.setAttribute("src", `diceImg/${playerOne}.png`);
    player2Dice.setAttribute("src", `diceImg/${playerTwo}.png`);

    let resultHeading = document.getElementById("resultWinner");

    if(playerOne > playerTwo){
        resultHeading.textContent =`🚩 ${playerName} Wins!`;
}
else if (playerTwo > playerOne){
    resultHeading.textContent ="Player 2 Wins! 🚩";
}
else {
    resultHeading.textContent = "🎲 It's a Draw! 🎲";
}
}