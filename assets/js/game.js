

// player stats
var playerName = window.prompt("Name your robot for glorious combat!");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerHealth, playerAttack);

// enemy stats
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// everything inside of the below curly brace is a whole function - REMEMBER THIS!!
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    // Subtract playerAttack from enemyHealth
    enemyHealth = enemyHealth - playerAttack;
    // console log that
    // can line break in the parenthesis to make reading this easier
    console.log(
        playerName + " attacked " + enemyName + "! " + enemyName + " now has " + enemyHealth + " health remaining!"
    );
    // subtract enemyAttack from playerHealth
    playerHealth = playerHealth - enemyAttack;
    // console log that too
    console.log(
        enemyName + " attacks " + playerName + "! " + playerName + " now has " + playerHealth + " health remaining!"
    );
};

// this is calling the function
fight();