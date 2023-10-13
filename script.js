const containerDiv = document.querySelector('.container')
const sketchFace = document.querySelector('.sketch-face')
const colorSelection = document.querySelector('.color-selection')
const sizeSelector = document.querySelector('.grid-selection')
const submitSize = document.querySelector('.submit-selection')
const resetButton = document.querySelector('.reset')

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
}

makeGrid()

submitSize.addEventListener('click', makeGrid)

resetButton.addEventListener('click', function() {
    sizeSelector.value = ''
})