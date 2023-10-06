const containerDiv = document.querySelector('.container')

for (let i = 1; i < 257; i++){
    const gridDivs = document.createElement('div');
    containerDiv.appendChild(gridDivs)
}