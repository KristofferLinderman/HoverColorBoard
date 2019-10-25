const board = document.getElementById('board');
const squaresCount = 500;
const defaultColor = '#333';
let squares = [];

window.onload = () => {
    setUpBoard();
}

function setUpBoard() {
    for (let index = 0; index < squaresCount; index++) {
        let square = document.createElement('div');

        square.classList.add('square');
        board.appendChild(square);

        square.addEventListener('mouseover', (event) => {
            giveColor(event.target, getColor());
        });
        square.addEventListener('mouseout', (event) => {
            removeColor(event.target);
        });
    }
}

function getColor() {
    return "fff";
}

function giveColor(element, color) {
    element.style.backgroundColor = `#${color}`;
    element.style.boxShadow = `0 0 3px 1px #${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = defaultColor;
    element.style.boxShadow = 'none';
}