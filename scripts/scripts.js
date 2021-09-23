// console.log("Chemistry Craze"); 

let selectVol = document.querySelector("#volume");
let selectConc = document.querySelector("#conc");
let nextBtn = document.querySelector("#btn-next");
let showError = document.querySelector("#showError");
let part1 = document.querySelector("#part1"); 


let section = document.querySelector("section"); 
let c1 = document.querySelector("#c1") ;
let v1 = document.querySelector("#v1");
let c2 = document.querySelector("#c2");
let v2 = document.querySelector("#v2");

let clacBtn = document.querySelector("#btn-calc");
let showOutput = document.querySelector("#showOutput");

section.style.display='none'; 


// let arrayInterest = ['concentration' , 'volume']; 

function showNextStep() {
    if (selectVol.checked) {
        console.log("Volume selected")
        section.style.display= 'block';
        // c2.style.display ='inline-block' ;
        v2.disabled = true; 
        c2.disabled = false;
        
        

    } else if (selectConc.checked) {
        console.log("concentration selected")
        section.style.display = 'block'; 
        // v2.style.display = 'inline-block'; 
        c2.disabled= true;
        v2.disabled= false; 

     } else {
         console.log("please select one")
         showError.innerText = "Please select one"; 
     }

     part1.style.display='none'; 
       
}


nextBtn.addEventListener("click", showNextStep);
