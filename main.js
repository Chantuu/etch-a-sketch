const sizeButton = document.querySelector('.button1');
const clearButton = document.querySelector('.button2');
const eraseButton = document.querySelector('.eraseButton')
const gridContainer = document.querySelector('.grid-container');

let eraseMode = false;

function switchEraseMode(bool) {
    eraseMode = bool;

    switch (bool) {
        case true:
            eraseButton.style.color = 'green';
            break;
    
        case false:
            eraseButton.style.color = 'black';
            break;
    }
}

function changeColor(e) {
    if (eraseMode == false) {
        e.target.style.backgroundColor = 'black';
    } else if (eraseMode == true) {
        e.target.style.backgroundColor = 'white';
    }
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
    switchEraseMode(false);

    const squares = gridContainer.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    gridContainer.style.gridTemplateColumns = '0';
    gridContainer.style.gridTemplateRows = '0';
};

function checkGridSizeInput() {
    switchEraseMode(false);

    userInput = +(prompt('Please enter grid size (1-64): '))
    if (userInput > 64 || userInput < 1) {
        alert('Please input in defined range!');
    } else if (userInput >= 1 || userInput <= 64) {
        addDivsToContainer(userInput);
    }
};

sizeButton.addEventListener('click', checkGridSizeInput);
clearButton.addEventListener('click', clearGridContainer);
eraseButton.addEventListener('click', function () {
    if (!eraseMode) {
        switchEraseMode(true)
    } else if (eraseMode) {
        switchEraseMode(false)
    }
});

