let array1 = ["qualcosa1", "qualcosa2", "qualcosa3", "qualcosa4"];
let array2 = ["qualquadra1", "qualquadra2"];
let resultElement = document.querySelector("#result");

do {
    if (array1.length < array2.length) {
        array1.push(prompt("Inserisci quello che vuoi"));
    } else if (array1.length > array2.length) {
        array2.push(prompt("Inserisci quello che vuoi"));
    }
    else {
        resultElement.innerHTML = `Gli array sono uguali`
    }
} while (array1.length != array2.length);

resultElement.innerHTML = `${array1}<br>${array2}`;