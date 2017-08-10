// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.reset();
};

// This function updates the enemies speed based on a speed
// set in the reset function
// It also resets enemies a moment after they leave the board
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if(this.x > 600){
        this.reset();
    }
};

// Resets enemies to the left of the game area and 
// gives them new random speed and height.
Enemy.prototype.reset = function(){
    this.x = -100;
    var height = Math.ceil(Math.random() * 3);
    switch(height){
        case 1:
            this.y = 70;
            break;
        case 2:
            this.y = 150;
            break;
        case 3:
            this.y = 230;
            break;
    }
    this.speed = Math.random() * (500 - 200) + 200;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This is the player class.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 390;
}

// This function checks to see if the player has made it to the water.\
// If they have the score is increased and the player is reset.
Player.prototype.update = function(){
    if (player.y <= -10){
            score += 100;
            player = new Player;
    }
}

// This function simply uses the drawImage function to render the player.
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// This function checks which key the user has pressed and moves
// the player accordingly. 
// It also constrains the player to the game area.
Player.prototype.handleInput = function(direction){
    switch(direction){
        case "left":
            if(player.x > 0){
            this.x -= 100;
            }
            break;
        case "right":
            if(player.x < 400){
            this.x += 100;
            }
            break;
        case "up":
            if(player.y > -10){
            this.y -= 80;
            }
            break;
        case "down":
            if(player.y < 390){
            this.y += 80;
            }
            break;
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player;
var score = 0;



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
