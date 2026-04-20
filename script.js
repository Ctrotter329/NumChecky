const inputEl = document.getElementById("numberInput");
const resultEl = document.getElementById("result");
const form = document.getElementById("numberForm");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    checkNumber();
}

function checkNumber() {
    const input = inputEl.value.trim();

    if (!input) {
        showResult("Please enter a number");
        return;
    }

    const number = Number(input);

    if (isNaN(number)) {
        showResult("That’s not a valid number");
        return;
    }

    showResult(getNumberLabel(number));
    inputEl.value = "";
}

function getNumberLabel(number) {
    if (number > 10) return "Big";
    if (number === 10) return "Booyah Boii!";
    if (number > 5) return "Medium";
    return "Small";
}

function showResult(message) {
    resultEl.innerText = message;
}