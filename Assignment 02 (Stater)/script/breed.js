'use strict';
const submitBtn = getId("submit-btn");
const breedInput = getId("input-breed");
const typeInput = getId("input-type");

submitBtn.addEventListener('click', onClickSubmit);

function onClickSubmit(){
    const dataInput = {
        breed : breedInput.value,
        type : typeInput.value,
    }

    if(validateData(dataInput)){
        data.breeds[dataInput.type].push(dataInput);
    }
}

function validateData(dataInput){
    let valid = true;
    const sendMsg = msg => {
        alert(msg);
        valid = false;
    }
    if(dataInput.type == "Select Type") sendMsg("Select type please!");
    else if(dataInput.breed.trim() == "") sendMsg('Input breed please!');
    return valid;
}