// Game States
// WIN - The players WINS when they have defeated all robots
//      * fight all bots
//      * defeat each bot
// LOSE - Player's health reduced to 0

// player base stats
var playerName = window.prompt("Name your robot for glorious combat!");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack, playerMoney);

// enemy base stats
var enemyNames = ["Roborto", "Amy Androird", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// for loop to check enemy index
for(var i = 0; i < enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

// everything inside of the below curly brace is a whole function - REMEMBER THIS!!
var fight = function(enemyName) {
    // window.alert("Welcome to Robot Gladiators!");
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Will you FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);

        // if player chooses to skip:
     if (promptFight === "skip" || promptFight === "SKIP") {
        // quit confirm
        var confirmSkip = window.confirm("You will be penalized if you skip this fight! Are you sure?")
        
        // if yes (true), skip battle
        if (confirmSkip) {
            window.alert(playerName + " has chosen to live another day! 10 money lost!");
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        } 
    }

        // Subtract playerAttack from enemyHealth
        enemyHealth = enemyHealth - playerAttack;
        
        // console log that
        // can line break in the parenthesis to make reading this easier
        console.log(
            playerName + " attacked " + enemyName + "! " + enemyName + " now has " + enemyHealth + " health remaining!"
        );
        
        // enemy health check
            if (enemyHealth <= 0) {
                window.alert("A devastating blow! " + enemyName + " has been defeated!");
            // money award
                playerMoney = playerMoney + 20;
                console.log("playerMoney", playerMoney);
            // enemy is dead, exit loop
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left!");
            }
        
         // subtract enemyAttack from playerHealth
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacks " + playerName + "! " + playerName + " now has " + playerHealth + " health remaining!"
        );
    
        // player health check
            if (playerHealth <= 0) {
                window.alert("A merciless attack! " + playerName + " has been defeated!");
                break;
            } else {
                window.alert(playerName + " won't take that lying down! " + playerName + " still has " + playerHealth + " health remaining!");
            }
        }  
    };

    
// end of fight function



// this is calling the function
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}



