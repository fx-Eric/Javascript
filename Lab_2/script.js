// 2.6.1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


//2.6.2
const markHigherBMI = BMIMark > BMIJohn;

if(markHigherBMI) {
    console.log(`Mark's ${BMIMark} is higher than John's ${BMIJohn} !`);
} else {
    console.log(`John's ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}


