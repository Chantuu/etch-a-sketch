const sizeButton = document.querySelector('.button1');
const clearButton = document.querySelector('.button2');
const gridContainer = document.querySelector('.grid-container');

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
};

function addDivsToContainer(count) {
    clearGridContainer();

    gridContainer.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${count}, 1fr)`;

    amount = count * count;
    for (i=0; i <= amount; i++) {
        const divElement = document.createElement('div');
        divElement.style.backgroundColor = 'white';
        divElement.addEventListener('mouseover', changeColor);
        gridContainer.insertAdjacentElement('beforeend', divElement);
    };
};

function clearGridContainer() {
    const squares = gridContainer.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    gridContainer.style.gridTemplateColumns = '0';
    gridContainer.style.gridTemplateRows = '0';
};

function checkGridSizeInput() {
    userInput = +(prompt('Please enter grid size (1-64): '))
    if (userInput > 64 || userInput < 1) {
        alert('Please input in defined range!');
    } else if (userInput >= 1 || userInput <= 64) {
        addDivsToContainer(userInput)
    };
}

sizeButton.addEventListener('click', checkGridSizeInput);

clearButton.addEventListener('click', clearGridContainer);

