// Lab 5.1. Giới thiệu về Object (5 phút)
// 1. Tạo một object là 'myCountry' cho quốc gia bạn chọn, chứa các thuộc tính 'country', 'capital', 'language', 'population' and 'neighbours' (array như chúng ta đã thực hành trong bài trước).
// const myCountry = {
//     country : "Vietnam",
//     capital : "Hanoi",
//     language : "Vietnamese",
//     population : 100,
//     neighbours : ["lao", "china", "cam"],
// }

// Lab 5.2. Dấu chấm với dấu ngoặc (10 phút)
// Sử dụng object từ bài tập trước, in string sau ra console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
// Tăng dân số của đất nước thêm hai triệu người bằng cách sử dụng dấu chấm (object.population), và sau đó giảm đi hai triệu người bằng dấu ngoặc (object['population']) để truy cập vào các thuộc tính. 
const finLand = {
    country : "FinLand",
    capital : "Helsinki",
    language : "finnish-speaking",
    population : 6,
    neighbours : ["lao", "china", "cam"],
}
console.log(`${finLand.country} has ${finLand.population} million ${finLand.language} people, ${finLand.neighbours.length} neighbouring countries and a capital called ${finLand.capital}.`)
finLand.population += 2;
finLand.population -= 2;

// Lab 5.3. Phương thức Object  (15 phút)
// Thêm một phương thức có tên là 'describe' vào object 'myCountry'. Phương thức này sẽ in một string ra console với nội dung như sau: "Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki" nhưng lần này sử dụng từ khóa 'this'.
// Gọi phương thức 'describe' 
// Thêm phương thức 'checkIsland' vào object 'myCountry'. Phương thức này sẽ thiết lập một thuộc tính mới trên object là 'isIsland'. 'isIsland' sẽ là giá trị true nếu không có nước láng giềng, ngược lại là false. Sử dụng toán tử điều kiện để đặt giá trị cho thuộc tính.
const myCountry = {
    country : "Vietnam",
    capital : "Hanoi",
    language : "Vietnamese",
    population : 100,
    neighbours : ["lao", "china", "cam"],
    describe: function(){
        console.log(`${this.country} has ${this.population} million ${this.language} people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    checkIsland: function(){
        this['isIsland'] = neighbours.length === 0;
    }
}

myCountry.describe();


// Lab 5.4. Vòng lặp For (5 phút)
// Ở đất nước bạn có các cuộc bầu cử. Ở một thị trấn nhỏ, chỉ có 50 cử tri. Sử dụng vòng lặp for để mô phỏng 50 cử tri này, bằng cách in string sau ra console (cho các số từ 1 đến 50): 'Voter number 1 is currently voting'.
for (let index = 0; index < 50; index++) {
    console.log(`Voter number ${index} is currently voting`);
}

// Lab 5.5. Lặp trong array, break và continue (15 phút)
// Hãy lấy lại array 'populations' từ bài lab trước.
// Sử dụng vòng lặp for để tạo array 'percentages2' chứa phần trăm dân số thế giới cho 4 giá trị population. Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó.
// Xác nhận rằng 'percentages2' chứa chính xác các giá trị trong array 'percentages' mà chúng ta đã tạo theo cách thủ công ở lab trước, để xem giải pháp này tốt hơn như thế nào.
const populations = [100, 130, 1440, 13];
const percentages1 = population => population / 7900 * 100;
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentages1(populations[i]));
}
console.log(percentages2);

// Lab 5.6. Vòng lặp ngược và Vòng lặp trong vòng lặp (15 phút)
// Lưu trữ array của những array này vào biến 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// Nếu như các mảng con có ít nhất hai phần tử, in ra lần lượt phần tử từ thứ 2 trở đi. Ví dụ với dữ liệu như trên sẽ in ra
// Mexico
// Sweden
// Russia
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        if(i > 1){
            console.log(listOfNeighbours[i][j]);
        }
    }
}

// Lab 5.7. Vòng lặp While (10 phút)
// Với đề bài tương tự Lab 5.5 Lặp trong array, break và continue, nhưng lần này hãy sử dựng vòng lặp while (gọi array 'percentages3').
// Bạn thích giải pháp nào hơn cho nhiệm vụ này: vòng lặp for hay vòng lặp while?

//vòng lặp for dễ sử dụng hơn. dễ dàng kiểm soát số lượng lặp hơn là white, cấu trúc cũng dễ hơn

//5.8.1
const Mark = {
    fullName: "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function () {
        return this.mass / (this.height * this.height)
    } 
}

const John = {
    fullName: "John Smith",
    mass : 92,
    height : 1.95,
    calcBMI : function () {
        return this.mass / (this.height * this.height)
    } 
}

if(Mark.calcBMI() == John.calcBMI()){
    console.log(`They have the same BMI ${Mark.calcBMI()}`)
}
if(Mark.calcBMI() > John.calcBMI()){
    console.log(`${Mark.fullName} ${Mark.calcBMI()} higher than ${John.calcBMI()}`);
} else {
    console.log(`${John.fullName} ${John.calcBMI()} higher than ${Mark.calcBMI()}`);
}


//5.8.2
const calcTip = bill => bill <= 300 && bill>= 50 ? bill * 0.15 : bill * 0.2;
const totals = [];
function calcTotals(bills) {
    for (let i = 0; i < bills.length; i++) {
        totals.push(calcTip(bills[i]) + bills[i]);
    }
    console.log(totals);
}
calcTotals([22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]);

//bonus
function calcAverage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum = sum / arr.length;
    console.log(sum);
}

calcAverage(totals);
