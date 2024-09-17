// TODO: this file! :)
// function to get all numbers. only numbers. 

const numbers = [];
const odd = [];
const even = [];

function addNumber(num) {
    numbers.push(num)
}


function renderNumberBank() {
    const numsInBank = numbers.map((number) => {
        const p = document.createElement("p");
        p.textContent = number;
        return p;
    });
    const numberBank = document.querySelector("#numberBank output");
    numberBank.replaceChildren(...numsInBank);
}

function render() {
    renderNumberBank();
}

//set up event listener and add number to numbers array.
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const numberInput = document.querySelector("#number");
    addNumber(numberInput.value);
    render();
});
