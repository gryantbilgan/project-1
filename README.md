# Kung Fu Doku(sudoku)
(or Wushu Doku, not sure yet)


## My Sick P1

### Ideas
* 1.nine different warriors
    * sword
    * spear
    * tank
    * bow
    * shield
    * knife
    * magic
    * horse
    * bomb
* 2.catwoman's nine lives in batman returns(the eight brushes with death or puss in boots)
* 3.multiversal solar system re-alignment(eight planets and sun)
* 4.a stitch in time saves nine(nine tasks to complete)

## Tech stack
Use DOM manipulation to style and generate battlefield game

# Battlefield (Instructions)
You are a captain. You have 81 soldiers under your command compiled of 9 different classes. You must place your soldiers strategically on the battlefield within grids, columns, and rows. To avoid redundancy and battlefield clutter, and also not hurt your soldier's egos, you must not place the same class of soldier within the same grid, column, or row. Once all your soldiers are dispersed into every square of the battlefield, and the previous ultimatum is met, you will be prepared for battle. Prove your competency and grit to lead your soldiers to victory by creating the perfect alignment. No battle is always the same, so be prepared to solve a new formation after completing delegation. "Do everything you ask of those you command." -George Patton

![Alt sudoku text](img/Screenshot%202023-03-17%20at%209.28.38%20AM.png)


# MVP
* Create a 9 x 9 grid - 81 sqaures, 9 boxes
* - 3 x 3 boxes with 9 squares in each box of grid
* - 9 columns of 9 squares in the grid
* - 9 rows of 9 squares in the grid
* Place numbers 1-9 below gameboard for user selection
* Place button for switching to notes
* Place button for erase
* Place button for new game
* Allow for interacrtive event for each square to place numbers and notes
* Allow for interactive events to choose number that you wish to place in the square
* Establish a number of allowable mistakes - 3
* If number of mistakes reached then game over
* Place conditions on the gameboard
* - must have numbers 1-9 in each box, row, and column with no repeat numbers
* - if condition met then game won




# Stretch
* Creat a grid layout as the stage of a battlefield
* Randomly generate a limited set of soldiers to the grid for each new game
* Assign numbers to each class of soldier so the "captain" knows who and what they are placing on the battlefield
* Generate a graphic for each class for user experience at the bottom of "battlefield"
* Generate a "Battle Cry" when board is full and configured correctly so the user knows that they've accomlished the goal
* Generate a "Defeat" when number of errors are used
* Designate a number of errors
* Allow for clearing the board when "defeat" comes up
* Allow for clearing of the board if user wants to restart if not completed
* Clear the board when user has achieved correct "Battle cry"
* Generate sound effects for each class of soldier when placed on the field
* Generate graphics for user experience so simulate battle simulation
* When the game is won and the field is clearing, simulate "soldiers" marching off the field into battle
* Add a time limit


# Potential Roadblocks
* Randomly generate a new configuration each time to avoid the same solution each time