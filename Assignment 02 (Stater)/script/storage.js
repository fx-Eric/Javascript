"use strict";
const KEY = "data";
const navEl = document.getElementById("sidebar");
let data = {
  pets: [],
  breeds: { Dog: [], Cat: []},
};

navEl.addEventListener("click", () => {
  navEl.classList.toggle("active");
});

function onLoad() {
  data = JSON.parse(localStorage.getItem(KEY));
}

function onSave() {
  localStorage.setItem(KEY, JSON.stringify(data));
}

if(localStorage.getItem(KEY)){
  onLoad();
}

function clearDatastore(){
  data = {
    pets: [],
    breeds: { Dog: [], Cat: []},
  };
}
