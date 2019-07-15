/* eslint-disable */
const unit = 30;
const gameBoard = document.querySelector('.gameboard');
let snakeDivs = document.getElementsByClassName('snake');
let snake = [{ x: 0, y: 0 }];

const animateTitle = document.querySelector('.title');
animateTitle.classList.add('animated','jackInTheBox');

//snake head
// snake[0] = ;

//old snake head position
let snakeHeadX = snake[0].x;
let snakeHeadY = snake[0].y;

//create score
let score = 0;

//got this function from here: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

//create froggy
let frogs = [{ x: getRandomArbitrary(0, 19), y: getRandomArbitrary(0, 19) }];

const renderFrog = function() {
	const frogElements = document.querySelectorAll('.frog');
	for (let i = 0; i < frogElements.length; i++) {
		console.log('remove frog element');
		frogElements[i].remove();
	}
	for (let i = 0; i < frogs.length; i++) {
		const frog = frogs[i];
		const frogElement = document.createElement('div');
		frogElement.className = 'frog';
		frogElement.style.left = (frog.x * unit).toString() + 'px';
		frogElement.style.top = (frog.y * unit).toString() + 'px';
		gameBoard.appendChild(frogElement);
	}
};
renderFrog();

// //DID SNAKE COLLIDE WITH ITS TAIL
// const collision = function() {
//     for(let i = 0; i < array[i].length; i++) {
//         if(head.x === array[i].x && head.y === array[i].y) {
//             return true;
//         };
//     };
//     return false;
// };

const isThereAFrogAt = function(x, y) {
	for (let i = 0; i < frogs.length; i++) {
		const frog = frogs[i];
		if (frog.x === x && frog.y === y) {
			return true;
		}
	}
	return false;
};

const addPartToSnake = () => {
	newSnake = document.createElement('div');
	newSnake.classList.add('snake');

	const coordinate = {
		x: snake[0].x - 1,
		y: snake[0].y - 1,
	};
	snake.push(coordinate);
	for (el in snake) {
		gameBoard.appendChild(newSnake);
	}
};

const removeFrogAt = function(x, y) {
	for (let i = 0; i < frogs.length; i++) {
		const frog = frogs[i];
		if (frog.x === snake[0].x && frog.y === snake[0].y) {
			// console.log('remove frog');
			addPartToSnake();
			console.log(snake);
			frogs.splice(i, 1);
			frogs = [{ x: getRandomArbitrary(0, 19), y: getRandomArbitrary(0, 19) }];
			const frog = frogs[0];
			console.log(frog);
			const frogEl = document.createElement('div');
			frogEl.className = 'frog';
			frogEl.style.left = (frog.x * unit).toString() + 'px';
			frogEl.style.top = (frog.y * unit).toString() + 'px';
			gameBoard.appendChild(frogEl);
			// snake.pop();
			// let newSnakeHead = {
			//     x: snakeHeadX,
			//     y: snakeHeadY
			// };
		}
	}
};

// Check if player can make move
// const canMoveTo = function(x,y) {
// //If the coordinate is outside of the grid, game is over
//     if(!checkLocation(x, y)) {
//         return false;
//     };
// //IF THE SNAKE TOUCHES ITSELF, GAME IS OVER
//     if(collision(head,array)) {
//         return false;
//     };
//     return true;
// };

//SNAKE STAYS WITHIN COORDINATE
const isCoordinateInGrid = function(x, y) {
	if (x < 0 || y < 0 || x > 19 || y > 19) {
		return false;
	}
	return true;
};

function moveSnake(x, y) {
	const snakeElement = document.querySelector('.snake');
	snakeElement.style.left = (snake[0].x * unit).toString() + 'px';
	snakeElement.style.top = (snake[0].y * unit).toString() + 'px';
	if (isThereAFrogAt(x, y)) {
		removeFrogAt(x, y);
		renderFrog();
		console.log('snake ate frog!');
	}
}

function moveUp() {
	if (isCoordinateInGrid(snake[0].x, snake[0].y - 1)) {
		snake[0].y -= 1;
		moveSnake(snake[0].x, snake[0].y);
	}
}

function moveDown() {
	if (isCoordinateInGrid(snake[0].x, snake[0].y + 1)) {
		snake[0].y += 1;
		moveSnake(snake[0].x, snake[0].y);
	}
}

function moveLeft() {
	if (isCoordinateInGrid(snake[0].x - 1, snake[0].y)) {
		snake[0].x -= 1;
		moveSnake(snake[0].x, snake[0].y);
	}
}

function moveRight() {
	if (isCoordinateInGrid(snake[0].x + 1, snake[0].y)) {
		snake[0].x += 1;
		moveSnake(snake[0].x, snake[0].y);
	}
}

document.body.addEventListener('keydown', function(event) {
	const keyCode = event.keyCode;
	if ([37, 38, 39, 40].includes(keyCode)) {
		event.preventDefault();
	}
	switch (keyCode) {
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
	}
});

// let game = setInterval(play, 100);