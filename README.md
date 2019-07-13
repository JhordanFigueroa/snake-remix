# snake-remix

# Introduction 
ALOHA, Welcome to Snake-REMIX! One of the classic games in the early ages of the internet, snake is a great game for all ages and universially spoken across many countries. The concept of Snake dates back to the dawn of the internet to the arcade game Blockade. It was developed and published by Gremlin in 1976. The first version of the game on mobile phones was introduced by Nokia in 1998.The version you are about to play was developed by Jhordan Figueroa as the first project for his Software Engineering Immersive Bootcamp with General Assembly. 

# Concept 
The underlying principles and logic of this version remains the same as the original version of Snake. The player has to navigate the snake (block) with the up/down/right/left arrow keys to eat a block (apple). Once the snake eats the apple, the snake grows by one block(pixel) and the user has to eat the apple again. Each time the snake eats the apple, the snake grows and the speed is increased by a factor of 2 from the previous start. This process repeats each time with the snake growing longer. The game is won when the user reaches a minimum on three variables: time played, length of snake, and speed of snake. The minimum on the three variables differs by level with the minimum increasing in levels. The game is lost if the player either runs into any part of the snake length or collides with any part of the box that confides the game. The snake begins at a set location within the game board; the center for each level. The apple begins at a random position each time the game is started. At any time the player can start at the level they want to start. There are five landing pages/screens the user will see: 
1. Landing page
2. Level 1 - Suave
3. Level 2 - Suave-Loco
4. Level 3 - Loco
5. Game Decision 

# Landing Page 
The landing page will consist of welcome message, instructions, links to levels, and authors info. 

# Level 1 Suave
This level is easy. The initial parameters are: 
Initial Speed: 2
Initial Length: 1
Maximum Time: 180 seconds 
The snake will start in the middle of the game box with the apple starting at a random position. 

The player can move on to the next level if all these conditions are initially met: 
Minimum Time:  60 seconds
Snake Length: > 10
Snake Speed: > 5

A notification will display that the player can move to the next level when these conditions are met. 

The player can keep playing to get the highest record for the level up too a maximum of three minutes. 


# Level 2 Suave-Loco
This level is intermediate. The initial parameters are: 
Initial Speed: 5
Initial Length: 5
Maximum Time: 180 seconds

The snake will start in the middle of the game box with the apple starting at a random position. 

This level adds to variables into the game: knife and speed reducer that will be randomly inserted into the game box once the user reaches the winning conditions in level 1. The knife variable will allow the user to cut down the snake length by 1 factor. The speed reducer will allow the user to cut the speed by 1 factor. 

The player can move on to the next level if all these conditions are initially met: 
Minimum Time: 90 seconds
Snake Length: > 15
Snake Speed: > 10

A notification will display that the player can move to the next level when these conditions are met. 

The player can keep playing to get the highest record for the level up too a maximum of three minutes. 

# Level 3 Loco
This level is Loco. The initial parameters are: 
Initial Speed: 5
Initial Length: 5
Maximum Time: 180 seconds

TWO snakes will start of the game. One will start in the middle and the other snake will start at a random position within of the game box. There will be two apples starting at random positions as well. 

The player will have to navigate the extra snake with the W/A/S/D keys. 

The player wins the game if all these conditions are initially met for both snakes: 
Minimum Time: 90 seconds
Snake Length: > 10
Snake Speed: > 10

The player can keep playing to get the highest record for the level up too a maximum of three minutes.

# Game Decision:
The game decision screen will appear after each level. 

It will include: game decision text, score: first, second, and third highest scores, play again box, and next level links.  

# Instructions 
Navigate the snake using the up/down/left/right keys on your keyboard within a square box to eat the apples without touching any part of the snake or any part of the game box. 

For levels 1 and 2: 
Up Key: moves snake up
Down Key: moves snake down
Left Key: moves snake left
Right Key: moves snake right

For Level 3: The second snake
W Key: moves snake up
S Key: moves snake down
A Key: moves snake left
D Key: moves snake right

# References 
// Build Canvas - Game Box 
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage

// Install Images
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images

// Frog Image
https://www.clipartmax.com/middle/m2H7i8m2m2m2N4H7_frog-splat-icon-frog-png-icon/

// Drawing Images
