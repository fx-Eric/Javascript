// 2.1
// const country = "VietNam";
// console.log(typeof(country))

// const continent = "Asia"
// console.log(typeof(continent))

// const population = 100000000;
// console.log(typeof(population))

// const isIsland = false;
// console.log(typeof(isIsland))

// let language;
// console.log(typeof(language))

// 2.2 
// const country = "VietNam";
// country = "Vietnam1"

// const continent = "Asia"
// continent = "Asia1"

// let population = 100000000;
// population = 110000000;

// const isIsland = false;
// isIsland = true;

// const language = "Vietnamese";
// language = "Vietnamese1"

// Lab 2.3
// 1. Nếu quốc gia của bạn bị chia cắt làm hai miền, mỗi miền gồm một nửa dân số của quốc gia, vậy sẽ có bao nhiêu người sống ở mỗi miền? Hãy sử dụng giá trị từ biến population để hoàn thành yêu cầu này, in ra màn hình console giá trị của population chia 2.
population /= 2;

// 2. Tăng giá trị của biến population thêm 1 và in kết quả ra console.
population += 1;

// 3. Phần Lan có dân số là 6 triệu người. Kiểm tra xem quốc gia bạn có nhiều dân hơn so với Phần Lan không? Bạn cần in ra console xem giá trị population có lớn hơn 6 triệu không?
let finlandPopulation = 6000000;
const higherPopulation = population > finlandPopulation ? console.log("higher") : console.log("lower");

// 4. Dân số trung bình của một quốc gia là 33 triệu người. Kiểm tra xem quốc gia bạn có ít dân hơn so với các mức dân số trung bình không?
let averagePopuplation = 33000000;
const higherPopulationThanAverage = population > averagePopuplation;
console.log(higherPopulationThanAverage);

// 5. Dựa trên các biến bạn đã tạo, hãy tạo một biến mới là  'description', trong đó có chứa một string có định dạng sau: '<country> and its <population> million people speak <language>'. Bạn cần thay thế các giá trị trong <> thành các biến tương ứng.
const description = country  + " and its "  + population + " million people speak " +  language;

// Lab 2.4
// 1. Tạo lại biến 'description' từ lần gán trước, lần này hãy sử dụng cú pháp template literal.
const description = `${country} and its ${population} million people speak ${language}`;

// Lab 2.5
// 1. Nếu dân số của nước bạn có hơn 33 triệu người, hãy in string sau ra console: '<country>'s population is above average'. Nếu không hãy in ra một string như thế này: '<country>'s population is < 33 - population > million below average' . Ví dụ dân số của Hà Lan là 18 triệu người, bạn sẽ cần in ra "Nederland's population is 15 million below average" (15 là lấy 33 - 18).
const amountOfHigher = higherPopulationThanAverage? population - averagePopuplation : averagePopuplation - population;
higherPopulationThanAverage ? console.log(`${country}'s population is ${amountOfHigher} million above average`) : console.log(`${country}'s population is ${amountOfHigher} million below average`);

// 2. Sau khi kiểm tra kết quả, thay đổi giá trị biến population tạm thời thành 13, sau đó thành 130. Quan sát các kết quả khác nhau và đặt giá trị trở lại ban đầu.
// population = 13000000;
// population = 130000000;

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


