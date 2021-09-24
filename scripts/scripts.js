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
let btnCalcConc = docume.querySelector("#btn-calc-conc");
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

    } else if (selectConc.checked) {
        console.log("concentration selected")
        section.style.display = 'block';
        // v2.style.display = 'inline-block'; 
        c2.disabled = true;
        v1.disabled = false;
        part1.style.display = 'none';

    } else {
        part1.style.display = 'block';

        console.log("please select one");

        showError.innerText = "Please select one";

    }

}

nextBtn.addEventListener("click", showNextStep);


// Actual calculation






function calculateDesiredVolume(c1, c2, v1, v2) {

    if (v1 == '') {
        console.log(c1 + ", " + c2 + ", " + v2);

        let ourV1 = (c2 * v2) / c1;

        console.log(ourV1);
        ourV1 = ourV1.toFixed(2)
        console.log(`Take ${ourV1} ${volUnits.value} of concentrated solution and raise the volume to ${v2} ${volUnits.value}`);

        showOutput.innerText = `Take ${ourV1} ${volUnits.value} of concentrated solution and raise the volume to ${v2} ${volUnits.value} with the solvent given in protocol`;
    }
}


function calculateDesiredConcentration(c1, v1, c2, v2) {
    if (c2 === '') {
        console.log("you are on right track");
        let ourC2 = (c1 * v1) / v2;
        console.log(ourC2);
    }
}


function validateInputs() {

    let c1 = parseFloat(inputC1.value);
    let c2 = parseFloat(inputC2.value);
    let v1 = parseFloat(inputV1.value);
    let v2 = parseFloat(inputV2.value);

    // console.log (c1, c2, v2); 

    if (v1 == ""); {
        if (c1 == '' || c2 == "" || v2 == "") {
            // console.log("please enter some  numbers"); 
            showOutput.innerText = "please enter some  numbers";

        } else if (c1 < c2) {
            // console.log("c1 must be greater than c2");
            showOutput.innerText = "C1 must be greater than C2. We can only dilute solutions using this formula";
        } else if (c1 <= 0 || c2 <= 0 || v2 <= 0) {
            // console.log("Negative inputs not allowed"); 
            showOutput.innerText = "Volume and/or concenration cannto be zero negative";
        } else {
            calculateDesiredVolume(c1, v1, c2, v2);
        } 
        
    }  if (c2 == "") {
            if (c1 == '' || v2 == "" || v1 == "") {
                // console.log("please enter some  numbers"); 
                showOutput.innerText = "please enter some  numbers";

            } else {
                calculateDesiredConcentration(c1, v1, c2, v2);
            }

        } else {
            console.log("you reached here!");
        }

    }


   btnCalcVol.addEventListener("click", validateInputs);