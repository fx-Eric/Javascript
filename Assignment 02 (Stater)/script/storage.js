"use strict";
const KEY = "data";
const navEl = getId("sidebar");
let data = {
  pets: [],
  breeds: {
    Dog: [],
    Cat: [],
  },
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



const pet1 = {
  id: 1,
  name: "1",
  age: 1,
  type: "Dog",
  weight: 1,
  length: 1,
  breed: "Tam the",
  color: "#FF4486",
  vaccinated: false,
  dewormed: true,
  sterillized: false,
  date: new Date().getDay(),
};

const pet2 = {
  id: 2,
  name: "2",
  age: 2,
  type: "Dog",
  weight: 1,
  length: 1,
  breed: "Tam the",
  color: "#F51221",
  vaccinated: false,
  dewormed: false,
  sterillized: false,
  date: new Date().getDay(),
};

const breed1 = {
  type: "Dog",
  breed: "cho mun",
};

const breed2 = {
  type: "Cat",
  breed: "meo muop",
};

const breed3 = {
  type: "Cat",
  breed: "tam the",
};

const breed4 = {
  type: "Cat",
  breed: "mon leo",
};

data.pets.push(pet1, pet2);
function checkTypeBreed(breed) {
  data.breeds[breed.type].push(breed.breed);
}
checkTypeBreed(breed1);
checkTypeBreed(breed2);
checkTypeBreed(breed3);
checkTypeBreed(breed4);

if (!localStorage.getItem(KEY)) {
  onSave();
}
if (localStorage.getItem(KEY)) {
  onLoad();
}
log(data);
