const containerDiv = document.querySelector('.container')
const sketchFace = document.querySelector('.sketch-face')
const colorSelection = document.querySelector('.color-selection')
const sizeSelector = document.querySelector('.grid-selection')
const submitSize = document.querySelector('.submit-selection')
const resetButton = document.querySelector('.reset')
const btnColor = document.querySelectorAll('[data-selection]')
let rainbowColors = ['red', 'blue', 'purple', 'violet', 'orange']


function makeGrid() {
    let size = parseInt(sizeSelector.value)

    sketchFace.innerHTML = '';

    sketchFace.style.gridTemplateRows = `repeat(${size}, 1fr)`
    sketchFace.style.gridTemplateColumns = `repeat(${size}, 1fr)`


    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        sketchFace.appendChild(cell);
    }
    let cells = document.querySelectorAll('.cell');

    btnColor.forEach((button, index) => button.addEventListener(
        'click', () => {
            let colorSelected = button.getAttribute('data-selection');
            for (let box of cells) {
                if (colorSelected == 'rainbow') {
                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
                    })
                } else {
                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = colorSelected
                    })
                }
            }
        }
    ))
}

makeGrid()

submitSize.addEventListener('click', makeGrid)

resetButton.addEventListener('click', function() {
    sizeSelector.value = ''
})