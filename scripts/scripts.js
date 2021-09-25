// console.log("Chemistry Craze"); 

let selectVol = document.querySelector("#volume");
let selectConc = document.querySelector("#conc");
let nextBtn = document.querySelector("#btn-next");
let showError = document.querySelector("#showError");
let part1 = document.querySelector("#part1");


let section = document.querySelector("section");
let inputC1 = document.querySelector("#c1");
let inputV1 = document.querySelector("#v1");
let inputC2 = document.querySelector("#c2");
let inputV2 = document.querySelector("#v2");

let btnCalcVol = document.querySelector("#btn-calc-vol");
let btnCalcConc = document.querySelector("#btn-calc-conc");
let showOutput = document.querySelector("#showOutput");


let concUnits = document.querySelector("#concUnits");
let volUnits = document.querySelector("#volUnits");

section.style.display = 'none';


function showNextStep() {
    if (selectVol.checked) {
        console.log("Volume selected")
        section.style.display = 'block';
        // c2.style.display ='inline-block' ;
        v1.disabled = true;
        c2.disabled = false;
        part1.style.display = 'none';
        btnCalcConc.style.display = 'none';

    } else if (selectConc.checked) {
        console.log("concentration selected")
        section.style.display = 'block';
        // v2.style.display = 'inline-block'; 
        c2.disabled = true;
        v1.disabled = false;
        part1.style.display = 'none';
        btnCalcVol.style.display="none"; 

    } else {
        part1.style.display = 'block';

        console.log("please select one");

        showError.innerText = "Please select one";

    }

}

nextBtn.addEventListener("click", showNextStep);


// Actual calculation






function calculateVolume() {

    let c1 = inputC1.value;
    let c2 = inputC2.value;
    // let v1 = inputV1.value;
    let v2 = inputV2.value;

    console.log(c1 + ", " + c2 + ", " + v2);

    c1 = parseFloat(c1);
    c2 = parseFloat(c2);
    v2 = parseFloat(v2);

    if (c1 <= 0 || c2 <= 0 || v2 <= 0) {
        // console.log("Negative inputs not allowed"); 
        showOutput.innerText = "Volume and/or concenration cannto be zero negative";
    } else if (c1 == c2) {
        showOutput.innerText = "Initial & Final Concentration is the same, diluton not required";
    } else if (c1 < c2) {
        // console.log("c1 must be greater than c2");
        showOutput.innerText = "C1 must be greater than C2. We can only dilute solutions using this formula";
    } else if (c1 > c2 && v2 != "") {
        let ourV1 = (c2 * v2) / c1;

        console.log(ourV1);
        ourV1 = ourV1.toFixed(2)
        console.log(`Take ${ourV1} ${volUnits.value} of concentrated solution and raise the volume to ${v2} ${volUnits.value}`);

        showOutput.innerText = `Take ${ourV1} ${volUnits.value} of concentrated solution and raise the volume to ${v2} ${volUnits.value} with the solvent given in protocol`;
    }  else {
        console.log('You are in the last block');
        showOutput.innerText = "Please enter valid inputs and try again";
    }
}

btnCalcVol.addEventListener("click", calculateVolume);




// For Concentration Calculation

function calculateConcentration() {
   
    let c1 = inputC1.value;
    // let c2 = inputC2.value;
    let v1 = inputV1.value;
    let v2 = inputV2.value; 
    

    console.log(c1 + ", " + v1 + ", " + v2);

    c1 = parseFloat(c1);
    // c2 = parseFloat(c2);
    v2 = parseFloat(v2);
    v1 = parseFloat(v1);

    if (c1 <= 0 || v2 <= 0 || v1 <= 0) {
        // console.log("Negative inputs not allowed"); 
        showOutput.innerText = "Volume and/or concenration cannto be zero or negative";
    } else if (v1 == v2) {
        showOutput.innerText = "Initial & Final Volume is the same. Therefore, C2 will be same as C1";
    } else if (v1 > v2) {
        // console.log("c1 must be greater than c2");
        showOutput.innerText = "V2 must be greater than V1, otherwise dilution is not possible";
    } else {  
        console.log("you are on right track");
        let ourC2 = (c1 * v1) / v2;
        ourC2 = ourC2.toFixed(2);

        console.log(ourC2);

        showOutput.innerText = `Taking ${c1} ${concUnits.value} of concentrated solution and raising it to ${v2} ${volUnits.value} with solvent (from protocol) will give a solution of strength ${ourC2} ${concUnits.value}. `
    }



   
    
}

btnCalcConc.addEventListener("click", calculateConcentration);











