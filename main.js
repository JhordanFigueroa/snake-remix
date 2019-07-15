/* eslint-disable */
const unit = 30;
const gameBoard = document.querySelector('.gameboard');
let snakeDivs = document.getElementsByClassName('snake');
let snake = [{ x: 0, y: 0 }];

const animateTitle = document.querySelector('.title');
animateTitle.classList.add('animated','jackInTheBox');

const animateRefresh = document.querySelector('.refresh');
animateRefresh.classList.add('animated', 'bounce')

const animateHome = document.querySelector('.home');
animateHome.classList.add('animated', 'flash')

const animateWinner = document.querySelector('.winner');
animateWinner.classList.add('animated', 'rubberBand')

//old snake head position
let snakeHeadX = snake[0].x;
let snakeHeadY = snake[0].y;

//create score
let score = 0;
let highScores = [];
document.getElementById('score').innerHTML = "Score: " + score;

//Timer
let level1Clock = 30;
const displayClock = document.getElementById('clock');

setInterval(function() {
    if (level1Clock == -1) {
        clearTimeout(level1Clock);
        gameover();
    } else {
        displayClock.innerHTML = level1Clock + ' seconds remaining';
        level1Clock--;
    }
}, 1000)

function gameover() {
    let display = confirm('YOU RAN OUT OF TIME! CHECK YOUR SCORE! PRESS OK TO PLAY AGAIN OR CANCEL TO CHECK LEADERS BOARD.')
    if (display == true) {
        location.reload();
    } else {
        location.assign("file:///Users/jhordanfigueroa/SEI-Cicadas/unit1/project/snake-remix/winner.html");
    }
};


//got this function from here: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

//create froggy
let frogs = [{ x: getRandomArbitrary(0, 19), y: getRandomArbitrary(0, 13) }];

const renderFrog = function() {
	const frogElements = document.querySelectorAll('.frog');
	for (let i = 0; i < frogElements.length; i++) {
		// console.log('remove frog element');
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

const isThereAFrogAt = function(x, y) {
	for (let i = 0; i < frogs.length; i++) {
		const frog = frogs[i];
		if (frog.x === x && frog.y === y) {
			return true;
		}
	}
	return false;
};

// you need a counter to hold the snakeLength e.g. snakeLength = 2
// show the snake according to snakeLength
// then depending on the direction of where the snake is moving to,
// right or left, then work with snake width css
// if down or up work with snake height css
// tip: keep track of the snake's head location e.g. snakeHead

// const addPartToSnake = function() {
// 	newSnake = document.createElement('div');
// 	newSnake.classList.add('snake');

// 	const coordinate = {
// 		x: snake[0].x - 1,
// 		y: snake[0].y - 1,
// 	};
// 	snake.push(coordinate);
// 	for (el in snake) {
// 		gameBoard.appendChild(newSnake);
// 	}
// };

const removeFrogAt = function(x, y) {
	for (let i = 0; i < frogs.length; i++) {
		const frog = frogs[i];
		if (frog.x === snake[0].x && frog.y === snake[0].y) {
			// console.log('remove frog');
            // addPartToSnake();
            score++;
            console.log(score);
            document.getElementById('score').innerHTML = "Score: " + score;
			// console.log(snake);
			frogs.splice(i, 1);
			frogs = [{ x: getRandomArbitrary(0, 19), y: getRandomArbitrary(0, 13) }];
			const frog = frogs[0];
			// console.log(frog);
			const frogEl = document.createElement('div');
			frogEl.className = 'frog';
			frogEl.style.left = (frog.x * unit).toString() + 'px';
			frogEl.style.top = (frog.y * unit).toString() + 'px';
			gameBoard.appendChild(frogEl);
		}
	}
};

// function scoreBoard () {
//     if(typeof(Storage) !=="undefined") {
//         let score = false;
//         if(localStorage["high-scores"]) {
//             // highScores.innerHTML = ''; 
//             highScores = JSON.parse(localStorage["high-scores"]);
//             score = score.sort(function(a,b){return parseInt(b)-parseInt(a)});
//             for(let i = 0; i < 5; i++) {
//                 let scoreString = score[i];
//                 let scores = document.createElement('li');
//                 scores.innerHTML = (typeof(scoreString) != "undefined" ? scoreString : "");
//                 highScores.appendChild(scores);
//             };
//         }
//         console.log(highScores); 
//     };
// };
// scoreBoard();


//SNAKE STAYS WITHIN COORDINATE
const isCoordinateInGrid = function(x, y) {
	if (x < 0 || y < 0 || x > 19 || y > 13) {
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
		// console.log('snake ate frog!');
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