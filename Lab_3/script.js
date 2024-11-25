/// 3.6.1
///data 1 
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

// ///data 2
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// ///data 3
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy");
} else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas win the trophy");
} else if(scoreDolphins == scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both win the trophy")
} else {
    console.log("No one wins the trophy");
}


/// 3.6.2

const bill = 430 
const tip = bill <= 300 && bill>= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill : ${bill}$, tip : ${tip}$, total : ${bill + tip}$`)