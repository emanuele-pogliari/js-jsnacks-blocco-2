
let array = [];
let number;
let arraySum = 0;
let displayElement = document.querySelector("#result");

do {
    number = Number(prompt("Inserisci numero"));
    array.push(number)
    arraySum += number;

} while (arraySum < 50);



displayElement.innerHTML = `L'array e' ${array} <br> La somma degli elementi e' ${arraySum}`;
console.log(arraySum);
console.log(array);