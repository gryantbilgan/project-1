// Build arrays and strings for numbers placed on the gameboard as well as the solution
// Establish indexes for each tile
var numSelected = null;
var tileSelected = null;
var noteSelected = null;
var gameIsActive = true;

// Error counter
var errors = 0;

// Gameboard Index

var gameboard = [
    "--2-8--6-",
    "-56917-3-",
    "-4--5-871",
    "-9----6--",
    "671-952--",
    "----2-1--",
    "167-3-59-",
    "48--7-3--",
    "-2546----"
]

// Solution Index
var solution = [
    "712384965",
    "856917432",
    "943652871",
    "298143657",
    "671895243",
    "534726189",
    "167238594",
    "489571326",
    "325469718"
]

// Load the gameboard as soon as the page has loaded
window.onload = function() {
    setGame();
}


const resetButton = document.querySelector("#resetButton")


const handleResetButtonClick = function () {
    console.log("new game turkey!");
    gameboard = [
        "--2-8--6-",
        "-56917-3-",
        "-4--5-871",
        "-9----6--",
        "671-952--",
        "----2-1--",
        "167-3-59-",
        "48--7-3--",
        "-2546----"
    ];
    numSelected = null;
    tileSelected = null;
    noteSelected = null;
    gameIsActive = true;
    const gameboardDiv = document.getElementById("gameboard")
    while (gameboardDiv.firstChild) {
        gameboardDiv.removeChild(gameboardDiv.firstChild)
    }
    setGame()
}


// Game function
// Create a div tag <div id="1" class="number">1</div>
// Use for loop for "digits 1-9" and to iterate in html
// Display the numbers
// Add number class and style
// Add note class and style
function setGame() {
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    // for (let j = 1; j <= 9; j++) {
    //     let notes = document.createElement("div");
    //     notes.id = j
    //     notes.innerText = j;
    //     notes.addEventListener("click", selectNote);
    //     notes.classList.add("notes");
    //     document.getElementById("scribbles").appendChild(notes);
    // }
   
    // Gameboard 9x9
    // Gameboard index = r - c
    // Use for loop to fill rows and columns index
    // Use "r" and "c" for "rows" and "columns"
    // Create tile id in another div
    // Use concatenation to string row and column
    // Add  tile class and style
    // Append tile to gameboard
    // Add event at tile
    // Display row and column index on board
    // Remove dashes with condition
    // Add style for tile-start
    // Add horizontal and vertical line and style
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString()
            if (gameboard[r][c] != "-") {
                tile.innerText = gameboard[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("gameboard").append(tile);
        }
    }
}

// Add funcitonality to game
// Allow user to select numbers
// Tie function to div elements
// Add number-selected class and style
// Toggle highlight of number-selcted on and off
function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}
// function selectNote() {
//     if (noteSelected != null) {
//         noteSelected.classList.remove("note-selected");
//     }
//     noteSelected = this;
//     noteSelected.classList.add("note-selected");
// }

// Add function for select tile and add number
// When clicking on tile make sure number selected first
// Add condiditonal to keep from overriding perviously placed number
// Split string coordinates into new array without dash
// Compare number input with solution board
// Parse the value of the row and column and return a number for coordinates
// If number input doesn't match solution then errors display and won't inout number
function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        console.log(r,c, numSelected.id, coords, this.id)

        if(solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        } else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}

// Reset button event listener
resetButton.addEventListener("click", handleResetButtonClick)