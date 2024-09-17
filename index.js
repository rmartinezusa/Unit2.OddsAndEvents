// TODO: this file! :)
// function to get all numbers. only numbers. 

const numbers = [];
const evenNums = [];
const oddNums = [];

function addNumber2Arr(num) {
    numbers.push(num)
}

function sortEvenOdd(){
    const num = numbers.shift();
    if (num%2 === 0) {
        evenNums.push(num)
    } else {
        oddNums.push(num);
    }
}

// render function to add to bank
function renderNumberBank() {
    const numsInBank = numbers.map((number) => {
        const p = document.createElement("p");
        p.textContent = number;
        return p;
    });
    const numberBank = document.querySelector("#numberBank output");
    numberBank.replaceChildren(...numsInBank);
}

//render function to even arr
function renderEvenNums() {
    const evens = evenNums.map((number) => {
        const p = document.createElement("p");
        p.textContent = number;
        return p;
    });
    const evenNumsElement = document.querySelector("#evens output");
    evenNumsElement.replaceChildren(...evens);
}

//render function to odd arr
function renderOddNums() {
    const odds = oddNums.map((number) => {
        const p = document.createElement("p");
        p.textContent = number;
        return p;
    });
    const oddNumsElement = document.querySelector("#odds output");
    oddNumsElement.replaceChildren(...odds);
}

//main render function to call all functions
function render() {
    renderNumberBank();
    renderEvenNums();
    renderOddNums();
}

//event listener form.
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const numberInput = document.querySelector("#number");
    addNumber2Arr(numberInput.value);
    render();
});

//event listener #sortOne button.
const sortOne = document.querySelector("#sortOne");
sortOne.addEventListener("click", () => {
    sortEvenOdd();
    render()
});

//event listener #sortAll button.
const sortAll = document.querySelector("#sortAll");
sortAll.addEventListener("click", () => {
    while (numbers.length > 0) {
        sortEvenOdd();
    }
    render() 
});









