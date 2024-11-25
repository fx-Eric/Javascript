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
