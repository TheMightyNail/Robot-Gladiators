// Game States
// WIN - The players WINS when they have defeated all robots
//      * fight all bots
//      * defeat each bot
// LOSE - Player's health reduced to 0


// everything inside of the below curly brace is a whole function - REMEMBER THIS!!
var fight = function(enemy) {
    console.log(enemy);
    while(playerInfo.health > 0 & enemy.health > 0) {
        var promptFight = window.prompt("Will you FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);

        // if player chooses to skip:
     if (promptFight === "skip" || promptFight === "SKIP") {
        // quit confirm
        var confirmSkip = window.confirm("You will be penalized if you skip this fight! Are you sure?")
        
        // if yes (true), skip battle
        if (confirmSkip) {
            window.alert(playerInfo.name + " has chosen to live another day! 10 money lost!");
            playerInfo.Money = Math.max(0, playerInfo.Money - 10);
            console.log("playerInfo.Money", playerInfo.Money);
            break;
        } 
    } 

        // Subtract playerInfo.attack from enemyHealth
        enemy.health = Math.max(0, enemy.health - playerInfo.attack);
        
        // console log that
        // can line break in the parenthesis to make reading this easier
        console.log(
            playerInfo.name + " attacked " + enemy.name + "! " + enemy.name + " now has " + enemy.health + " health remaining!"
        );
        
        // enemy health check
            if (enemy.health <= 0) {
                window.alert("A devastating blow! " + enemy.name + " has been defeated!");
            // money award
                playerInfo.Money = playerInfo.Money + 20;
                console.log("playerInfo.Money", playerInfo.Money);
            // enemy is dead, exit loop
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left!");
            }
        
         // subtract enemyAttack from playerInfo.health
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
        console.log(
            enemy.name + " attacks " + playerInfo.name + "! " + playerInfo.name + " now has " + playerInfo.health + " health remaining!"
        );
    
        // player health check
            if (playerInfo.health <= 0) {
                window.alert("A merciless attack! " + playerInfo.name  + " has been defeated!");
                break;
            } else {
                window.alert(playerInfo.name + " won't take that lying down! " + playerInfo.name + " still has " + playerInfo.health + " health remaining!");
            }
        }  
    };

    
// end of fight function

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// this is calling the function
var startGame = function() {
    // reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health >= 0){
            // Indicates Round Number
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            
            // picks new enemy to fight
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy health
            pickedEnemyObj.health = randomNumber(40, 60);

            // debugger tool to pauses script
            debugger;

            // pickedEnemyName valued in the fight function assumes value of enemyName
            fight(pickedEnemyObj);

            // if enemies still remain
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Your robot has claimed the philosophically-challenged lives of their opponents, as well as VICTORY! Honor to your mechanical menace! Final Score: " + playerInfo.Money)
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
            playerInfo.refillHealth();
            break;

        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
            playerInfo.upgradeAttack();
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

// random number generation
var randomNumber = function(min, max) {
    var value = (Math.floor(Math.random()* (max - min + 1) + min));
    return value;
};


// player base stats
var playerInfo = {
    name: window.prompt("Name your robot for glorious combat!"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Recharging " + playerInfo.name + "'s battery. Health restored by 20 point.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You lack the necessary funds!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading attack module. Attack upgraded by 6 points.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert ("You lack the necessary funds!");
        }
    }
};

// enemy base stats
var enemyInfo =[
    {
        name: "Roborto",
        attack: randomNumber(10,14),
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14), 
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14),     }
];

// game start when page loads
startGame();



