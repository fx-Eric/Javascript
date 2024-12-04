"use strict";
const content = getId("container-form");
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
const tableBodyEl = getId("tbody");

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
      <td><button type="button" class="btn btn-warning" onClick="editPet(${
        p.id
      })">Edit</button></td>
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

function clearTable() {
  tableBodyEl.innerHTML = "";
}
