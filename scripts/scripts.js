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

let clacBtn = document.querySelector("#btn-calc");
let showOutput = document.querySelector("#showOutput");


let concUnits = document.querySelector("#concUnits");
let volUnits = document.querySelector("#volUnits");

section.style.display = 'none';


// let arrayInterest = ['concentration' , 'volume']; 

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
        part1.style.display ='block';

        console.log("please select one");
         
        showError.innerText = "Please select one";

    }   

}

nextBtn.addEventListener("click", showNextStep);



function validateInputs(cee1, cee2, vee2) {

    if ( cee1 == "" || cee2 == "") {
        showOutput.innerText = "Please enter a valid input for concentrations";
        console.log("Please enter a valid input for concentrations");
    } else {
        calculateDesired();
    }

    /*
    if (cee2 > cee1) {
        console.log("c2 must be lesser than c1");
        showOutput.innerText = "C2 must be lesser than C1";
    } else if (cee1 <= 0 || cee2 <= 0) {
        showOutput.innerText = "Please enter a valid input for concentrations";
    } else if (vee2 <= 0) {
        showOutput.innerText = "Please enter a valid number for volume";
    } else if (cee1 == '' || cee2 == "" || vee2 == '') {
        showOutput.innerText = "Please input some numbers"
    } else {
        return (cee1, cee2, vee2);
    }

    */
}

// function checkInputs(c1, c2, v2) {
//     let c1 = inputC1.value;
//     let c2 = inputC2.value;
//     let v1 = inputV1.value;
//     let v2 = inputV2.value;




    //     if (c1 == '' || c2 == "" || v2 == '') {
    //         console.log("no numbers?"); 
    //         showOutput.innerText = "Please input some numbers"
    //     } else if (c1 < c2) {
    //         console.log("c1 < c2 is not possible");
    //     } else if (c1 <= 0 || c2 <= 0) {
    //         console.log("Please enter a valid input for concentrations")
    //         showOutput.innerText = "Please enter a valid input for concentrations";
    //     } else if (v2 <= 0) {
    //         console.log("Please enter a valid number for volume")
    //         showOutput.innerText = "Please enter a valid number for volume";
    //     } else {
    //         return c1, c2, v2
    //     }
    // }



    function calculateDesired() {

        validateInputs(c1, c2, v2)
        // checkInputs(c1, c2, v2);

        if (v1 == '') {
            console.log(c1 + ", " + c2 + ", " + v2);

            let ourV1 = (c2 * v2) / c1;

            console.log(ourV1);
            ourV1 = ourV1.toFixed(2)
            console.log(`Take ${ourV1} ${volUnits.value} of concentrated solution and raise the volume to ${v2} ${volUnits.value}`);

            showOutput.innerText = `Take ${ourV1} ${volUnits.value} of concentrated solution and raise the volume to ${v2} ${volUnits.value}`;


        } else if (c2 === '') {
            console.log("you are on right track");
            let ourC2 = (c1 * v1) / v2;
            console.log(ourC2);
        } else {
            return c1, c2, v2
            // console.log("something is not right");
            // showOutput.innerText = "something is not right";
        }
    }


    clacBtn.addEventListener("click", calculateDesired);