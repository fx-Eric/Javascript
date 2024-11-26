"use strict";
const submitBtn = getId("submit-btn");
const idInput = getId("input-id");
const nameInput = getId("input-name");
const ageInput = getId("input-age");
const typeInput = getId("input-type");
const weightInput = getId("input-weight");
const lengthInput = getId("input-length");
const colorInput = getId("input-color-1");
const breedInput = getId("input-breed");
const vaccinatedInput = getId("input-vaccinated");
const dewormedInput = getId("input-dewormed");
const sterilizedInput = getId("input-sterilized");

const petArr  = [];
submitBtn.addEventListener("click", () => {
  const pet = {
    id: idInput.value,
    name: nameInput.value,
    age : ageInput.value,
    type: typeInput.value,
    weight: weightInput.value,
    length: lengthInput.value,
    color: colorInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterillized: sterilizedInput.checked,
    date: new Date(),
  };

  const validate = validateData(pet)
  if (validate) {
      petArr.push(data)
    //   clearInput()
    //   renderTableData(petArr)
  }
});

function validateData(pet){
    
}