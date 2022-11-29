let number = Math.floor(Math.random() * 100);

let newGame2 = document.getElementById("newGame");
let validate2 = document.getElementById("validate");
let numberPropose2 = document.getElementById("numberPropose");
let lucky2 = document.getElementById("lucky");
let registration2 = document.getElementById("registration");
let result2 = document.getElementById("result");
let game2 = document.getElementById("game");
let numberRetained2 = document.getElementById("numberRetained");
let yourScore2 = document.getElementById("yourScore");

let nbTentative = 10;

function verification() {
    if (registration2.value === "" ) {
        alert("veillez saisir un nombre");
    }else {
    if (nbTentative > 0) {
        if (parseInt(registration2.value) === number) {
            result2.innerHTML = "C'est gagné !!!";
            game2.style.display= "none";
            yourScore2.style.display = "none";
        }else if (parseInt(registration2.value) < number) {
            result2.innerHTML = "C'est trop petit";
            nbTentative -= 1;
            lucky2.innerHTML = nbTentative;
            numberPropose2.style.display = "inline";
            numberRetained2.innerHTML += registration2.value + "-";
        }else if (parseInt(registration2.value) > number){
            result2.innerHTML = "C'est trop grand";
            nbTentative -= 1;
            numberRetained2.innerHTML += registration2.value + "-";
            lucky2.innerHTML = nbTentative;
        }else {
            result2.innerHTML = "perdu ! Le nombre était" + "\n" + number;
            lucky2.innerHTML = nbTentative;
        }
        registration2.value = "";  /* efface le chiffre dans l'input */
    }}
}
validate2.addEventListener("click", function () {
    verification();
})

newGame2.addEventListener("click", function () {
    nbTentative = 10;
    result2.innerHTML = "";
    number = Math.floor(Math.random() * 100);
    numberPropose2.style.display = "";
    registration2.value = "";
    numberRetained2.innerHTML = "";
    lucky2.innerHTML = "10";
})





