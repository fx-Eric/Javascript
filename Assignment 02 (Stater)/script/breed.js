"use strict";
const submitBtn = getId("submit-btn");
const breedInput = getId("input-breed");
const typeInput = getId("input-type");
const tableBodyEl = getId("tbody");

submitBtn.addEventListener("click", onClickSubmit);

let index = 1;

renderTableData();

function onClickSubmit() {
  const dataInput = {
    breed: breedInput.value,
    type: typeInput.value,
  };

  if (validateData(dataInput)) {
    data.breeds[dataInput.type].push(dataInput.breed);
    renderTableData();
    clearInputData();
    onSave();
  }
}

function renderTableData() {
  clearTable();
  data.breeds["Cat"].forEach((breed) => {
    renderLine(breed, "Cat");
  });
  data.breeds["Dog"].forEach((breed) => {
    renderLine(breed, "Dog");
  });
}

function renderLine(breed, type) {
  const row = document.createElement("tr");
  row.innerHTML = `
	<th scope="row">${index}</th>
    <th>${breed}</th>
    <th>${type}</th>
	<td>
        <button type="button" class="btn btn-danger" onClick="deleteBreed('${breed}', '${type}')">
            Delete
        </button>
    </td>
  `;
  tableBodyEl.appendChild(row);
  index++;
}

function deleteBreed(breed, type){
    if(!confirm("Are you sure?")) return;
    data.breeds[type] = data.breeds[type].filter(b => b != breed);
    renderTableData();
    onSave();
}

function validateData(dataInput) {
  let valid = true;
  const sendMsg = (msg) => {
    alert(msg);
    valid = false;
  };
  if (dataInput.type == "Select Type") sendMsg("Select type please!");
  else if (dataInput.breed.trim() == "") sendMsg("Input breed please!");
  data.breeds[dataInput.type].forEach(breed => {
    if(dataInput.breed == breed){
        sendMsg("Breed the same!");
    }
  });
  return valid;
}

function clearInputData(){
    breedInput.value = "";
    typeInput.value = "Select Type";
}

function clearTable() {
    index=1;
  tableBodyEl.innerHTML = "";
}
