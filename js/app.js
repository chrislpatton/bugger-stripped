// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var enemyObj ={};
    enemyObj.x = x;
    enemyObj.y = y;
    enemyObj.speed = speed;
    enemyObj.update = update;
    enemyObj.render = render;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    //enemyObj.sprite = 'images/enemy-bug.png';
    return enemyObj;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x >= 505) {
        this.x = 0;
    }

    checkCollision(this);
};

// Draw the enemy on the screen, required method for game
render = function() {
    ctx.drawImage(Resources.get('images/enemy-bug.png'), this.x, this.y);
};

// Now write your own player class
// This class requires a render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    

}




renderPlayer = function() {
   
    

};

handleInput = function(keyPress) {
    if (keyPress == 'left') {
        player.x -= player.speed;
    }
    if (keyPress == 'up') {
        player.y -= player.speed - 20;
    }
    if (keyPress == 'right') {
        player.x += player.speed;
    }
    if (keyPress == 'down') {
        player.y += player.speed - 20;
    }
    console.log('keyPress is: ' + keyPress);
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    handleInput(allowedKeys[e.keyCode]);
});



var checkCollision = function(anEnemy) {
    // check for collision between enemy and player
    if (
        player.y + 131 >= anEnemy.y + 90
        && player.x + 25 <= anEnemy.x + 88
        && player.y + 73 <= anEnemy.y + 135
        && player.x + 76 >= anEnemy.x + 11) {
        alert('Your dead!!!!');
        player.x = 202.5;
        player.y = 383;
    }

    
    if (player.y + 63 <= 0) {        
        player.x = 202.5;
        player.y = 383;
        alert('you made it!');
        level +=1;
        addEnemies(level);

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 505, 171);

        

    }

    // check if player runs into left, bottom, or right canvas walls
    // prevent player from moving beyond canvas wall boundaries
    if (player.y > 383 ) {
        player.y = 383;
    }
    if (player.x > 402.5) {
        player.x = 402.5;
    }
    if (player.x < 2.5) {
        player.x = 2.5;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var addEnemies = function(numEnemies) {
    // remove all previous enemies on canvas
    allEnemies.length = 0;

    // load new set of enemies
    for (var i = 0; i <= numEnemies; i++) {
        var enemy = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);
        
        allEnemies.push(enemy);
    }
};