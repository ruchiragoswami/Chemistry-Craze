// console.log("Chemistry Craze"); 

let selectVol = document.querySelector("#volume");
let selectConc = document.querySelector("#conc");
let nextBtn = document.querySelector("#btn-next");


let c1 = document.querySelector("#c1") ;
let v1 = document.querySelector("#v1");
let c2 = document.querySelector("#c2");
let v2 = document.querySelector("#v2");

let clacBtn = document.querySelector("#btn-calc");
let showOutput = document.querySelector("#showOutput");

let arrayInterest = ['concentration' , 'volume']; 

function showNextStep() {

    console.log(selectVol.value); 

    if (selectVol.value === 'volume') {
        console.log("you selected " + selectVol.value) 
    } else if (selectConc.value === 'concentration') {
        console.log("you selected " + selectConc.value)
    } else {
        console.log("Please give a valid input"); 
    }
}


nextBtn.addEventListener("click", showNextStep);
