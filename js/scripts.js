// Build arrays and strings for numbers placed on the gameboard as well as the solution
// Establish indexes for each tile
var numSelected = null;
var tileSelected = null;

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

// Game function
// Create a div tag <div id="1" class="number">1</div>
// Use for loop for "digits 1-9" and to iterate in html
// Display the numbers
// Add number class and style
function setGame() {
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
   
    // Gameboard 9x9
    // Gameboard index = r - c
    // Use for loop to fill rows and columns index
    // Use "r" and "c" for "rows" and "columns"
    // Create tile id in another div
    // Use concatenation to string row and column
    // Add  tile class and style
    // Append tile to gameboard
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString
            tile.classList.add("tile");
            document.getElementById("gameboard").append(tile);
        }
    }
}