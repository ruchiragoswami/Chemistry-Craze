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

// let arrayInterest = ['concentration' , 'volume']; 

function showNextStep() {
    if (selectVol.checked) {
        console.log("Volume selected")
    } else if (selectConc.checked) {
        console.log("concentration selected")
     } else {
         console.log("please select one")
     }
    

    
}


nextBtn.addEventListener("click", showNextStep);
