let userNumber;
let resultElement = document.querySelector("#result");

do {
    userNumber = Number(prompt("Inserisci un numero oppure premi 0 per uscire"));

    if (!isNaN(userNumber)) {

        if (userNumber % 2 === 0) {
            resultElement.innerHTML += `Numero inserito pari: ${userNumber}<br>`;
        } else {
            resultElement.innerHTML += `Numero dispari + 1: ${userNumber + 1}<br>`;
        }
    } else {
        resultElement.innerHTML = "Numero non valido"
    }

} while (userNumber != 0)