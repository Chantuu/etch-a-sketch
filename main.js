const sizeButton = document.querySelector('.button1');
const clearButton = document.querySelector('.button2');
const eraseButton = document.querySelector('.eraseButton');
const rainbowButton = document.querySelector('#rainbowButton');
const gridContainer = document.querySelector('.grid-container');

let eraseMode = false;
let rainbowMode = false;

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
};

function switchRainbowMode(bool) {
    rainbowMode = bool;

    switch (bool) {
        case true:
            rainbowButton.classList.add('animated');
            break;

        case false:
            rainbowButton.classList.remove('animated');
            break;
    }
    console.log(rainbowButton.classList);
};

function changeColor(e) {
    if (eraseMode == false) {
        if (!rainbowMode) {
            e.target.style.backgroundColor = 'black';
        } else if (rainbowMode) {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        }
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
    switchRainbowMode(false);

    const squares = gridContainer.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    gridContainer.style.gridTemplateColumns = '0';
    gridContainer.style.gridTemplateRows = '0';
};

function checkGridSizeInput() {
    switchEraseMode(false);
    switchRainbowMode(false);

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
    switchRainbowMode(false);
    if (!eraseMode) {
        switchEraseMode(true)
    } else if (eraseMode) {
        switchEraseMode(false)
    }
});
rainbowButton.addEventListener('click', function() {
    switchEraseMode(false);
    if (!rainbowMode) {
        switchRainbowMode(true);
    } else if (rainbowMode) {
        switchRainbowMode(false);
    }
});

