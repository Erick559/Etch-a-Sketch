const containerDiv = document.querySelector('.container')
const sketchFace = document.querySelector('.sketch-face')
const colorSelection = document.querySelector('.color-selection')
const sizeSelector = document.querySelector('.grid-selection')
const submitSize = document.querySelector('.submit-selection')

// let size = parseInt(sizeSelector.value)
// function makeGrid(size) {
    
//     sketchFace.style.gridTemplateRows = `repeat(${size}, 1fr)`
//     sketchFace.style.gridTemplateColumns = `repeat(${size}, 1fr)`


//     let numDivs = size * size;

//     for (let i = 0; i < numDivs; i++) {
//         let cell = document.createElement('div');
//         cell.className = 'cell';
//         sketchFace.appendChild(cell);
//     }
// }

// makeGrid(size)

// console.log(typeof size)

submitSize.addEventListener('click', function () {
    let size = parseInt(sizeSelector.value)

    sketchFace.style.gridTemplateRows = `repeat(${size}, 1fr)`
    sketchFace.style.gridTemplateColumns = `repeat(${size}, 1fr)`


    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        sketchFace.appendChild(cell);
    }
})




