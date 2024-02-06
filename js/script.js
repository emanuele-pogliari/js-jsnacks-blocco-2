let mySnacksElement = document.querySelectorAll(".my_snacks");
let newAudio = document.getElementById("sound-btn");
let keyDisplayElement = document.querySelector("input");


for (let i = 0; i < mySnacksElement.length; i++) {
    mySnacksElement[i].addEventListener("click", function () {
        newAudio.play();
    });
}

keyDisplayElement.addEventListener("keydown", function () {
    newAudio.play();
});