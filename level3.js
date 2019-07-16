/* eslint-disable */
const unit = 30;
const gameBoard = document.querySelector('.gameboard');
let snakeDivs = document.getElementsByClassName('snake');
let snake = [{ x: 0, y: 0 }];

const animateTitle = document.querySelector('.level3-title');
animateTitle.classList.add('animated','jackInTheBox');

const animateRefresh = document.querySelector('.refresh');
animateRefresh.classList.add('animated', 'bounce');

const animateHome = document.querySelector('.home');
animateHome.classList.add('animated', 'flash');

document.getElementsByClassName('refresh')[0].addEventListener("click", function(){ window.location.reload()});
//create score
let score = 0;
let highScores = [];
document.getElementById('score').innerHTML = "Score: " + score;
//Timer
let level1Clock = 60;
const displayClock = document.getElementById('clock');
setInterval(function() {
    if (level1Clock == -1) {
        clearTimeout(level1Clock);
        gameover();
    } else {
        displayClock.innerHTML = level1Clock + ' seconds remaining';
        level1Clock--;
    };
}, 1000);
function gameover() {
    let display = confirm('YOU RAN OUT OF TIME! CHECK YOUR SCORE! PRESS OK TO PLAY AGAIN OR CANCEL FOR FUNNY THINGS.')
    if (display == true) {
        location.reload();
    } else {
        location.assign("https://giphy.com/");
    };
};
//got this function from here: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};
//create froggy
let frogs = [{ x: getRandomArbitrary(0, 19), y: getRandomArbitrary(0, 13) }];
const renderFrog = function() {
	const frogElements = document.querySelectorAll('.frog');
	for (let i = 0; i < frogElements.length; i++) {
		frogElements[i].remove();
	};
	for (let i = 0; i < frogs.length; i++) {
		const frog = frogs[i];
		const frogElement = document.createElement('div');
		frogElement.className = 'frog';
		frogElement.style.left = (frog.x * unit).toString() + 'px';
		frogElement.style.top = (frog.y * unit).toString() + 'px';
		gameBoard.appendChild(frogElement);
	};
};
renderFrog();
const isThereAFrogAt = function(x, y) {
	for (let i = 0; i < frogs.length; i++) {
		const frog = frogs[i];
		if (frog.x === snake[0].x && frog.y === snake[0].y) {
			return true;
		};
	};
	return false;
};
//Local Storage
function highScore(score) {
    if(!localStorage.getItem('#highscores3')) {
        localStorage.setItem('#highscores3', score);
        const highestScore = parseInt(localStorage.getItem('#highscores3'));
        document.querySelector('#bestscore3').innerHTML = `New Highest Record: ${highestScore}`;
    } else if (parseInt(score) > parseInt(localStorage.getItem('#highscores3'))) {
        localStorage.setItem('#highscores3', score);
        const highestScore = parseInt(localStorage.getItem('#highscores3'));
        document.querySelector('#bestscore3').innerHTML = `New Highest Record: ${highestScore}`;
    } else {
        const highestScore = parseInt(localStorage.getItem('#highscores3'));
        document.querySelector('#bestscore3').innerHTML = `Highest Record: ${highestScore}`;
    };
};
const highestScore = parseInt(localStorage.getItem('#highscores3'));
document.querySelector('#bestscore3').innerHTML = `Highest Record: ${highestScore}`;

const removeFrogAt = function(x, y) {
	for (let i = 0; i < frogs.length; i++) {
		const frog = frogs[i];
		if (frog.x === snake[0].x && frog.y === snake[0].y) {
            score++;
            highScore(score);
            document.getElementById('score').innerHTML = "Score: " + score;
			frogs.splice(i, 1);
			frogs = [{ x: getRandomArbitrary(0, 19), y: getRandomArbitrary(0, 13) }];
			const frog = frogs[0];
			const frogEl = document.createElement('div');
			frogEl.className = 'frog';
			frogEl.style.left = (frog.x * unit).toString() + 'px';
			frogEl.style.top = (frog.y * unit).toString() + 'px';
			gameBoard.appendChild(frogEl);
        };
    };
};
//SNAKE STAYS WITHIN COORDINATE
const isCoordinateInGrid = function(x, y) {
	if (x < 0 || y < 0 || x > 19 || y > 13) {
        let show = confirm('GAME OVER! YOU TOUCHED THE EDGE. CLICK OK TO START AGAIN')
        if (show == true) {
            location.reload();
        } else {
            location.assign("https://giphy.com/");
        };
        return false;
	};
	return true;
};
function moveSnake(x, y) {
	const snakeElement = document.querySelector('.snake');
	snakeElement.style.left = (snake[0].x * unit).toString() + 'px';
	snakeElement.style.top = (snake[0].y * unit).toString() + 'px';
	if (isThereAFrogAt(x, y)) {
		removeFrogAt(x, y);
		renderFrog();
	};
};
function moveUp() {
	if (isCoordinateInGrid(snake[0].x, snake[0].y - 1)) {
		snake[0].y -= 1;
		moveSnake(snake[0].x, snake[0].y);
	};
};
function moveDown() {
	if (isCoordinateInGrid(snake[0].x, snake[0].y + 1)) {
		snake[0].y += 1;
		moveSnake(snake[0].x, snake[0].y);
	};
};
function moveLeft() {
	if (isCoordinateInGrid(snake[0].x - 1, snake[0].y)) {
		snake[0].x -= 1;
		moveSnake(snake[0].x, snake[0].y);
	};
};
function moveRight() {
	if (isCoordinateInGrid(snake[0].x + 1, snake[0].y)) {
		snake[0].x += 1;
		moveSnake(snake[0].x, snake[0].y);
	};
};
let control;
document.body.addEventListener('keydown', snakeControl);
function snakeControl (event) {
    let key = event.keyCode;
	if ([37, 38, 39, 40].includes(key)) {
		event.preventDefault();
    };
	switch (key) {
		case 37:
            moveLeft();
            control = "LEFT";
			break;
		case 38:
            moveUp();
            control = "UP";
			break;
		case 39:
            moveRight();
            control = "RIGHT";
			break;
		case 40:
            moveDown();
            control = "DOWN";
			break;
    };
};