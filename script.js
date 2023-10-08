const containerDiv = document.querySelector('.container')
const sketchFace = document.querySelector('.sketch-face')
const colorSelection = document.querySelector('.color-selection')

function makeGrid() {
    for (let i = 1; i <= 16; i++) {
        const gridRow = document.createElement('div');
        gridRow.className = 'grid-row';
        sketchFace.appendChild(gridRow);
    }

    for (let j = 1; j <= 16; j++) {
        const gridColumn = document.createElement('div');
        gridColumn.className = 'grid-column';
        sketchFace.appendChild(gridColumn);
    }
}

makeGrid()