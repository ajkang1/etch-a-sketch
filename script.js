let grid = document.querySelector('.grid');
let color = 'black';
let dimNums = document.querySelectorAll('.dim');
createGrid(16);

//Event listeners
let reset = document.querySelector('.resetGrid');
reset.addEventListener('click', () => {
    resetGrid();
});

let setSize = document.querySelector('.setSize');
setSize.addEventListener('click', () => {
    let dimension = parseInt(prompt("Pick a number 1-100."));

    while(dimension < 1 || dimension > 100){
        dimension = parseInt(prompt("Pick a number 1-100."));
    }

    createGrid(dimension);
});


//color event listeners
let red = document.querySelector('.red');
red.addEventListener('click', () => {
    color = 'red';
});

let orange = document.querySelector('.orange');
orange.addEventListener('click', () => {
    color = 'orange';
});

let yellow = document.querySelector('.yellow');
yellow.addEventListener('click', () => {
    color = 'yellow';
});

let green = document.querySelector('.green');
green.addEventListener('click', () => {
    color = 'green';
});

let blue = document.querySelector('.blue');
blue.addEventListener('click', () => {
    color = 'blue';
});

let purple = document.querySelector('.purple');
purple.addEventListener('click', () => {
    color = 'purple';
});

let black = document.querySelector('.black');
black.addEventListener('click', () => {
    color = 'black';
});


//functions
function createGrid(size){
    //delete any existing squares first to prevent overlapping
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        grid.removeChild(square);
    })

    let newSize = (500 - size*2)/size; //create new squares with respect to size
    for(let i = 0; i < (size*size); i++){
        let square = document.createElement('div');
        square.classList.add("square");
        square.style.width = `${newSize}px`;
        grid.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        });
    }

    dimNums.forEach((dim) => {
        dim.value = size;
    });
}

function resetGrid(){
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    });
}