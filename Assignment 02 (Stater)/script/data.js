'use strict';
const importBtn = document.getElementById("import-btn");
const exportBtn = document.getElementById("export-btn");
const fileInput = document.getElementById("input-file");

importBtn.addEventListener("click", importFile);
exportBtn.addEventListener("click", exportFile);

function exportFile(){
    if(!confirm("Sure to export file?")) return;
    const json = localStorage.getItem(KEY);
    const formattedJson = JSON.stringify(JSON.parse(json), null, 2);
    const blob = new Blob([formattedJson], { type: "application/json;charset=utf-8" });
    saveAs(blob, "export.json");
}

function importFile(){
    if(!fileInput.value) {
        alert("Please choose a file to import!")
        return;
    }
    if(!confirm("Sure to import file? ")) return;
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        formatData(JSON.parse(reader.result));
        onSave();
        alert("import success!")
    })

    if(file){
        reader.readAsText(file);
    }
    fileInput.value = "";
}

function formatData(newData){
    clearDatastore();
    newData.forEach(pet => {
        data.pets.push(pet);
        data.breeds[pet.type].push(pet.breed);
    });
}