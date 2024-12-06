"use strict";
const findBtn = document.getElementById("find-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const typeInput = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterillizedInput = document.getElementById("input-sterilized");
const tableBodyEl = document.getElementById("tbody");

findBtn.addEventListener("click", onFindPet);

renderTableData(data.pets);
showBreed();

function onFindPet() {
  const pet = {
    id: idInput.value,
    name: nameInput.value,
    type: typeInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterillized: sterillizedInput.checked,
  };
    renderTableData(searchPet(pet));
}

function showBreed(){
  breedInput.innerHTML = "<option>Select Breed</option>";
    data.breeds["Cat"].concat(data.breeds["Dog"]).forEach(breed => {
        const opt = document.createElement("option");
        opt.innerHTML = breed;
        breedInput.appendChild(opt);
    });
}

function searchPet(pet) {
  let listPetFound = data.pets;
  if (pet.id) {
    listPetFound = listPetFound.filter(p => p.id.includes(pet.id));
  }
  if (pet.name) {
    listPetFound = listPetFound.filter(p => p.name.includes(pet.name));
  }
  if (pet.type != "Select Type") {
    listPetFound = listPetFound.filter(p => p.type.includes(pet.type));
  }
  if (pet.breed != "Select Breed") {
    listPetFound = listPetFound.filter(p => p.breed.includes(pet.breed));
  }
  if(pet.vaccinated){
      listPetFound = listPetFound.filter(p => p.vaccinated == pet.vaccinated);
  }
  if(pet.dewormed){
      listPetFound = listPetFound.filter(p => p.dewormed == pet.dewormed);
  }
  if(pet.sterillized){
      listPetFound = listPetFound.filter(p => p.sterillized == pet.sterillized);
  }
  return listPetFound;
}

function renderTableData(arr) {
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
          <button type="button" class="btn btn-danger" onClick="deletePet(${
            p.id
          })">Delete</button>
      </td>
    `;
    tableBodyEl.appendChild(row);
  }

  function clearTable() {
    tableBodyEl.innerHTML = "";
  }
