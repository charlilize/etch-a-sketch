const changeNumSquares = document.querySelector(".change-square");
const container = document.querySelector(".container");
const CONTAINER_SIZE = 528;

// Create 16x16 grid of square divs
for (let i = 0; i < 256; i++) { // 256 becuase 16 x 16 means 256 squares
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.addEventListener("mouseover", () => {
        square.style.cssText = "background-color: #232323;"
    });
    container.appendChild(square);
}

// Button to change grid size
changeNumSquares.addEventListener("click", () => {
    let numOfSquaresASide = 
    parseInt(prompt("How many squares per side do you want for the new grid?"));

    // Verify number of squares to make a grid of
    if (isNaN(numOfSquaresASide)) alert("Not a number"); 
    else if (numOfSquaresASide > 100) alert("Too big of a number");  
    else if (numOfSquaresASide < 0) alert("No negative numbers");

    // Change the grid if a valid number 
    else {
        // Remove current grid
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        // Calculate size of new squares
        let squareSize = CONTAINER_SIZE / numOfSquaresASide - 2; // minus 2 to make squares fit

        // Create user's grid of square divs
        for (let i = 0; i < Math.pow(numOfSquaresASide, 2); i++) {
            let square = document.createElement("div");
            square.setAttribute("class", "square"); // add the border
            square.style.width = squareSize + "px";
            square.style.height = squareSize + "px";
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "#232323"; 
            });
            container.appendChild(square);
        }
    }
});
