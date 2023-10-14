const containerDiv = document.querySelector('.container')
const sketchFace = document.querySelector('.sketch-face')
const colorSelection = document.querySelector('.color-selection')
const sizeSelector = document.querySelector('.grid-selection')
const submitSize = document.querySelector('.submit-selection')
const resetButton = document.querySelector('.reset')
const eraseButton = document.querySelector('.erase')
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
    let isDrawing = false

    btnColor.forEach((button, index) => button.addEventListener(
        'click', () => {
            let colorSelected = button.getAttribute('data-selection');
            for (let box of cells) {
                box.addEventListener('mousedown', () => {
                    isDrawing = true
                })

                box.addEventListener('mouseup', () => {
                    isDrawing = false
                })

                box.addEventListener('mousemove', () => {
                    if (isDrawing) {
                        if (colorSelected == 'rainbow') {
                            box.style.backgroundColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)]
                        } else {
                            box.style.backgroundColor = colorSelected
                        }
                    }
                })

                resetButton.addEventListener('click', function() {
                    box.style.backgroundColor = 'white'
                    sizeSelector.value = ''
                })
            }
        }
    ))

    eraseButton.addEventListener('click', function() {
        for (let box of cells) {
            box.addEventListener('mousedown', function() {
                isDrawing = true
            })
            box.addEventListener('mouseup', function() {
                isDrawing = false
            })

            box.addEventListener('mousemove', function() {
                if (isDrawing) {
                    box.style.backgroundColor = 'white'
                }
            })
        }
    })
}

makeGrid()

submitSize.addEventListener('click', makeGrid)