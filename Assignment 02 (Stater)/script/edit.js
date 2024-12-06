"use strict";
const submitBtn = document.getElementById("submit-btn");
const content = document.getElementById("container-form");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const tableBodyEl = document.getElementById("tbody");

submitBtn.addEventListener("click", onSubmitBtn);
renderTableData();

function renderTableData() {
  clearTable();
  data.pets.forEach((p) => {
    renderLine(p);
  });
}

function renderLine(p) {
  const row = document.createElement("tr");
  row.innerHTML = `
      <th scope="row">${p.id}</th>
      <td>${p.name}</td>
      <td>${p.age}</td>
      <td>${p.type}</td>
      <td>${p.weight} kg</td>
      <td>${p.length} cm</td>
      <td>${p.breed}</td>
      <td><i class="bi bi-square-fill" style="color: ${p.color}"></i></td>
      <td><i class="bi bi-${p.vaccinated ? "check" : "x"}-circle-fill"></i></td>
      <td><i class="bi bi-${p.dewormed ? "check" : "x"}-circle-fill"></i></td>
      <td><i class="bi bi-${
        p.sterillized ? "check" : "x"
      }-circle-fill"></i></td>
      <td>${p.date}</td>
      <td><button type="button" class="btn btn-warning" onClick="editPet('${p.id}')">Edit</button></td>
    `;
  tableBodyEl.appendChild(row);
}

function editPet(id) {
  content.classList.remove("hide");
  const pet = data.pets.filter((p) => p.id == id)[0];
  onTypeChange(pet.type);
  idInput.value = id;
  nameInput.value = pet.name;
  ageInput.value = pet.age;
  typeInput.value = pet.type;
  weightInput.value = pet.weight;
  lengthInput.value = pet.length;
  colorInput.value = pet.color;
  breedInput.value = pet.breed;
  vaccinatedInput.checked = pet.vaccinated;
  dewormedInput.checked = pet.dewormed;
  sterilizedInput.checked = pet.sterillized;
}

function onTypeChange(type) {
  breedInput.innerHTML = "<option>Select Breed</option>";
  data.breeds[type].forEach((breed) => {
    showBreed(breed);
  });
}

function showBreed(breed) {
  const opt = document.createElement("option");
  opt.innerHTML = breed;
  breedInput.appendChild(opt);
}

function onSubmitBtn() {
  const pet = {
    id: idInput.value,
    name: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    breed: breedInput.value,
    color: colorInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterillized: sterilizedInput.checked,
    date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
  };

  if(validateData(pet)){
    replacePet(pet)
    renderTableData();
  }
}

function replacePet(newPet){
  if(!confirm("Are you ok!")) return;
  content.classList.add("hide");
  data.pets.forEach((p, index) => {
    if(newPet.id == p.id){
      data.pets[index] = newPet;
      onSave();
    }
  });
}

function validateData(p) {
  let valid = true;
  const setMessage = (mes) => {
    alert(mes);
    valid = false;
  };
  if (
    p.name.trim() == "" ||
    isNaN(p.age) ||
    isNaN(p.weight) ||
    isNaN(p.length)
  ) {
    setMessage("Cannot be empty!");
  } else {
    if (p.age <= 1 && 15 <= p.age) setMessage("Age must be between 1 and 15!");
    else if (p.weight <= 1 && 15 <= p.weight)
      setMessage("Weight must be between 1 and 15!");
    else if (p.length <= 1 && 100 <= p.length)
      setMessage("Length must be between 1 and 100!");
    else if (p.type == "Select Type") setMessage("Please select Type!");
    else if (p.breed == "Select Breed") setMessage("Please select Breed!");
  }
  return valid;
}



function clearTable() {
  tableBodyEl.innerHTML = "";
}
