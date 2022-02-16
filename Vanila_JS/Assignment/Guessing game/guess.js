const setNumber = document.querySelector("#inputSetNum");
const getGuess = document.querySelector("#inputGuessNum");
const getSubmit = document.querySelector("#set_number");

const displayNum = document.querySelector("#display span");
const displayResult = document.querySelector("#display span:last-child");

console.log(setNumber);
console.log(getGuess);
console.log(getSubmit);


function handleTodoSubmit (event) {
    event.preventDefault();
    const setNum = setNumber.value;
    const guessNum = getGuess.value;
    const genNum = Math.ceil(Math.random() * setNum);

    displayNum.innerText = `You chose: ${guessNum}, the machine chose: ${genNum}`;
    
    if (genNum == guessNum) {    
        displayResult.innerText = "You Win!"
    } else {
        displayResult.innerText = "You Lost!"
    };
 
}


getSubmit.addEventListener("submit", handleTodoSubmit);