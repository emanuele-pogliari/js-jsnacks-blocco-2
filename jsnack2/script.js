let randomNumber = Math.floor(Math.random() * 100) + 1;

let founded = false;
let oddNumber;
let resultElement = document.querySelector("#result");

do {
    oddNumber = Number(prompt("Inserisci numero"));
    if (oddNumber > randomNumber) {
        alert("Numero troppo alto");
    }
    else if (oddNumber < randomNumber) {
        alert("Numero troppo basso");
    } else {
        alert("Hai indovinato");
        founded = true;
    }
} while (founded !== true);

resultElement.innerHTML = `Il numero individuato e': ${randomNumber}`