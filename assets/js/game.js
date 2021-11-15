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
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth >= 0){
            // Indicates Round Number
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            
            // picks new enemy to fight
            var pickedEnemyName = enemyNames[i];

            // reset enemy health
            enemyHealth = 50;

            // debugger tool to pauses script
            // debugger;

            // pickedEnemyName valued in the fight function assumes value of enemyName
            fight(pickedEnemyName);

            // if enemies still remain
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("Well fought! Visit the Shoppe before the next bout?")

                // if yes, go to store() function
                if (storeConfirm){
                    shop();
                }
            }
        } else {
            window.alert("Your robot has died a warrior's death! Game Over!");
            break;
        }
    }
    endGame();
};

var endGame = function() {
    // player wins
    if (playerHealth > 0) {
        window.alert("Your robot has claimed the philosophically-challenged lives of their opponents, as well as VICTORY! Honor to your mechanical menace! Final Score: " + playerMoney)
    } else {
        window.alert("Your robot is now just a crumpled heap of scrap. Back to the garage.")
    }

    // play again?
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm) {
        // restart game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Return soon, so that you may show your might to the great Galactic Robo-Mecha-Khan PRIME!")
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "You may pay 7 credits to REFILL your health, or UPGRADE your attack. If you do not wish to make a purchase, you may LEAVE the Shoppe. Please enter 'REFILL', 'UPGRADE', or 'LEAVE'."
    );

    // switch to carry out selection
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
        case "Refill":
            if (playerMoney >= 7) {
            window.alert("Recharging " + playerName + "'s battery. Health restored by 20 point.");

            // increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            break;
            } else {
                window.alert("You lack the necessary funds!");
            }
            break;

        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrading attack module. Attack upgraded by 6 points.");

            // increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            break;
            } else {
                window.alert("You lack the necessary funds!");
            }
            break;
        
        case "leave":
        case "LEAVE":
        case "Leave":

            window.alert("Fine, don't buy anything. That's cool.");
            break;
        
        default: 
            window.alert("Please make a valid selection");
            shop();
            break;
    }
};

// game start when page loads
startGame();



