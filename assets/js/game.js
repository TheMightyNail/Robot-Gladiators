// player base stats
var playerName = window.prompt("Name your robot for glorious combat!");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack, playerMoney);

// enemy base stats
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// everything inside of the below curly brace is a whole function - REMEMBER THIS!!
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Will you FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);
    
        // if player chooses to fight:
    if (promptFight === "fight" || promptFight === "FIGHT") {
    
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
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left!");
            }
        
            // subtract enemyAttack from playerHealth
        playerHealth = playerHealth - enemyAttack;
        
        // console log that too
        console.log(
            enemyName + " attacks " + playerName + "! " + playerName + " now has " + playerHealth + " health remaining!"
        );
    
        // player health check
            if (playerHealth <= 0) {
                window.alert("A merciless attack! " + playerName + " has been defeated!");
            } else {
                window.alert(playerName + " won't take that lying down! " + playerName + " still has " + playerHealth + " health remaining!");
            }
        
        // if player chooses to skip:
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // quit confirm
        var confirmSkip = window.confirm("You will be penalized if you skip this fight! Are you sure?")
        
        // if yes (true), skip battle
        if (confirmSkip) {
            window.alert(playerName + " has chosen to live another day! 2 money lost!");
            playerMoney = playerMoney - 2;
        } else {
            fight();
        }
    } else {
        window.alert("You must choose a valid option! Try again!");
    }
};
// end of fight function

// this is calling the function
fight();