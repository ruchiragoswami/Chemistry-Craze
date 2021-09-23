// console.log("Chemistry Craze"); 

let selectVol = document.querySelector("#volume");
let selectConc = document.querySelector("#conc");
let nextBtn = document.querySelector("#btn-next");
let showError = document.querySelector("#showError");
let part1 = document.querySelector("#part1"); 


let section = document.querySelector("section"); 
let inputC1 = document.querySelector("#c1") ;
let inputV1 = document.querySelector("#v1");
let inputC2 = document.querySelector("#c2");
let inputV2 = document.querySelector("#v2");

let clacBtn = document.querySelector("#btn-calc");
let showOutput = document.querySelector("#showOutput");

section.style.display='none'; 


// let arrayInterest = ['concentration' , 'volume']; 

function showNextStep() {
    if (selectVol.checked) {
        console.log("Volume selected")
        section.style.display= 'block';
        // c2.style.display ='inline-block' ;
        v1.disabled = true; 
        c2.disabled = false;
        
        

    } else if (selectConc.checked) {
        console.log("concentration selected")
        section.style.display = 'block'; 
        // v2.style.display = 'inline-block'; 
        c2.disabled= true;
        v1.disabled= false; 

     } else {
         console.log("please select one")
         showError.innerText = "Please select one"; 
     }

     part1.style.display='none'; 
       
}

nextBtn.addEventListener("click", showNextStep);

function calculateDesired() {

    let c1 = inputC1.value;
    let c2= inputC2.value; 
    let v1= inputV1.value; 
    let v2 = inputV2.value;

    
    if (v1 === '') {        
        let ourV1 = (c2 * v2)/c1 ;
        console.log(ourV1);
    } else if(c2 === '') {
        console.log("you are on right track");
        let ourC2 = (c1 * v1)/v2;
        console.log(ourC2); 
    }



}


clacBtn.addEventListener("click", calculateDesired);







