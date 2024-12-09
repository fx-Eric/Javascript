function checkDogs(dogJulia, dogKate) {
  const newDogJulia = dogJulia.filter(
    p => p != dogJulia[0] && p != dogJulia[dogJulia.length - 1]
  );
  console.log();
  newDogJulia.concat(dogKate).forEach((dog, index) => {
    if (dog >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${dog} years old`
      );
    } else {
      console.log(
        `Dog number ${index + 1} is still a puppy, and is ${dog} years old`
      );
    }
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
