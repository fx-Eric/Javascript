"use strict";
const submitBtn = document.getElementById("submit-btn");
const healthBtn = document.getElementById("healthy-btn");
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

healthBtn.addEventListener("click", onClickShowHealthPet);
submitBtn.addEventListener("click", onClickCreatePet);
typeInput.addEventListener("change", onTypeChange);

let isOpenHealthTable = false;

renderTableData(data.pets);

function onClickShowHealthPet() {
  isOpenHealthTable = !isOpenHealthTable;
  checkShowHealthPet();
}

function checkShowHealthPet() {
  if (isOpenHealthTable) {
    renderTableData(
      data.pets.filter(
        (pet) => pet.vaccinated && pet.dewormed && pet.sterillized
      )
    );
  } else {
    renderTableData(data.pets);
  }
}

function onClickCreatePet() {
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
  if (validateData(pet)) {
    data.pets.push(pet);
    renderTableData(data.pets);
  }
  onSave();
}

function onTypeChange() {
  const breeds = data.breeds;
  breedInput.innerHTML = "<option>Select Breed</option>";
  breeds[typeInput.value].forEach((breed) => {
    showBreed(breed);
  });
}

function showBreed(breed) {
  const opt = document.createElement("option");
  opt.innerHTML = breed;
  breedInput.appendChild(opt);
}

function renderTableData(arr) {
  clearInput();
  clearTable();
  arr.forEach((pet) => {
    renderLine(pet);
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
	<td>
		<i class="bi bi-square-fill" style="color: ${p.color}"></i>
	</td>
	<td><i class="bi bi-${p.vaccinated ? "check" : "x"}-circle-fill"></i></td>
	<td><i class="bi bi-${p.dewormed ? "check" : "x"}-circle-fill"></i></td>
	<td><i class="bi bi-${p.sterillized ? "check" : "x"}-circle-fill"></i></td>
	<td>${p.date}</td>
	<td>
        <button type="button" class="btn btn-danger" onClick="deletePet('${p.id}')">Delete</button>
    </td>
  `;
  tableBodyEl.appendChild(row);
}

function deletePet(id) {
  if (!confirm("Are you sure?")) return;
  data.pets = data.pets.filter((p) => p.id != id);
  checkShowHealthPet();
  onSave();
}

function validateData(p) {
  let valid = true;
  const setMessage = (mes) => {
    alert(mes);
    valid = false;
  };
  if (
    p.id.trim() == "" ||
    p.name.trim() == "" ||
    isNaN(p.age) ||
    isNaN(p.weight) ||
    isNaN(p.length)
  ) {
    setMessage("Cannot be empty!");
  } else {
    data.pets.forEach((pet) => {
      if (pet.id == p.id) setMessage("ID must be Unique!");
    });
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

function clearInput() {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  weightInput.value = "";
  lengthInput.value = "";
  breedInput.value = "Select Breed";
  typeInput.value = "Select Type";
  colorInput.value = "#000000";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
}

function clearTable() {
  tableBodyEl.innerHTML = "";
}
