const board = document.getElementById('board');
const colorSwitch = document.getElementById('useColorSwitch');
const circleSwitch = document.getElementById('useCircleSwitch');
const fadeDurationSlider = document.getElementById('fadeDurationInput');
const fadeDurationText = document.getElementById('fadeDurationText');

const squaresCount = 4000;

const defaultInactiveSquareColor = '#333';
const defaultFadeDuration = 2;

let useColor = false;
let useCircle = false;
let fadeDuration = defaultFadeDuration;

let colorArray = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

window.onload = () => {
    setUpBoard();
    setUpColorSwitch();
    setUpcircleSwitch();
    setUpDurationSlider();
}

function setUpColorSwitch() {
    colorSwitch.addEventListener('change', (event) => {
        useColor = event.target.checked;
    })
}

function setUpcircleSwitch() {
    circleSwitch.addEventListener('change', (event) => {
        useCircle = event.target.checked;
        if (useCircle)
            makeCircles()
        else
            makeSquares();
    });
}

function makeCircles() {
    let squares = document.getElementsByClassName('square');

    for (let index = 0; index < squares.length; index++) {
        const element = squares[index];
        element.classList.add('circle');
    }
}

function makeSquares() {
    let squares = document.getElementsByClassName('square');

    for (let index = 0; index < squares.length; index++) {
        const element = squares[index];
        element.classList.remove('circle');
    }
}

function setUpDurationSlider() {
    fadeDurationSlider.addEventListener('input', (event) => {
        fadeDuration = event.target.value;
        // fadeDurationText.innerText = fadeDuration;
        fadeDurationText.innerText = fadeDuration % 1 === 0 ? fadeDuration + ".0s" : fadeDuration + "s";
    })
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
    if (!useColor) {
        return "#fff";
    }
    let colorIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[colorIndex];

}

function giveColor(element, color) {
    element.style.backgroundColor = `${color}`;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    element.style.transition = `all 0s`;
}

function removeColor(element) {
    element.style.backgroundColor = defaultInactiveSquareColor;
    element.style.transition = `all ${fadeDuration}s`;
    element.style.boxShadow = 'none';
}