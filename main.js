/* eslint-disable */
console.log("Aloha World!");

const unit = 30;

let snake = {x:0,y:0};
//snake head
// snake[0] = {x:10*unit, y:10*unit};

//create froggy
// let froggy = {
//     x : Math.floor(Math.random()) * unit,
//     y : Math.floor(Math.random()) * unit
// }

//IS SNAKE WITHIN GRID
const checkLocation = function (x,y) {
    if(x < 0 || y < 0 || x > 20 || y < 20) {
        return false;
    };
    return true;
};

//DID SNAKE COLLIDE WITH ITS TAIL 
const collision = function(head,array) {
    for(let i = 0; i < array[i].length; i++) {
        if(head.x === array[i].x && head.y === array[i].y) {
            return true;
        };
    }; 
    return false;
};

// Check if player can make move
const canMoveTo = function(x,y) {
//If the coordinate is outside of the grid, game is over    
    if(!checkLocation(x, y)) {
        return false;
    };
//IF THE SNAKE TOUCHES ITSELF, GAME IS OVER
    if(collision(head,array)) {
        return false;
    };
    return true;
};

function moveSnake() {
    const snakeElement = document.querySelector('.snake');
    snakeElement.style.left = (snake.x * unit).toString() + 'px';
    snakeElement.style.top = (snake.y * unit).toString() + 'px';
};

function moveUp () {
    console.log('move up');
    if(canMoveTo(snake.x, snake.y - 1)) {
        snake.y -= 1;
        moveSnake(snake.x, snake.y);
    };
};

function moveDown() {
    console.log('move down');
    if(canMoveTo(snake.x, snake.y + 1)) {
        snake.y += 1;
        moveSnake(snake.x, snake.y);
    };
};

function moveLeft() {
    console.log('move left');
    if(canMoveTo(snake.x - 1, snake.y)) {
        snake.x -= 1;
        moveSnake(snake.x, snake.y);
    };
};

function moveRight() {
    console.log('move right');
    if(canMoveTo(snake.x + 1, snake.y)) {
        snake.x += 1;
        moveSnake(snake.x, snake.y);
    };
};

document.body.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode;
    if([37,38,39,40].includes(keyCode)) {
        event.preventDefault();
    };
    switch(keyCode) {
      case 37:
        moveLeft();
        break;
      case 38:
        moveUp();
        break;
      case 39:
        moveRight();
        break;
      case 40:
        moveDown();
        break;
    };
});