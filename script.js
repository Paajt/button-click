// variables 
const textMessage = document.querySelector('#message');
const clickBtn = document.querySelector('#clickMessage');
const resetBtn = document.querySelector('#resetMessage');

// listeners for Click & Reset buttons
clickBtn.addEventListener("click", message);

resetBtn.addEventListener("click", resetButton);


// function to change h1 message
function message() {
    textMessage.innerHTML = "Goodbye World";

}

// function to reset h1 message
function resetButton() {
    textMessage.innerHTML = "Hello World";
}
