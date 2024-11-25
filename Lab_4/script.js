///4.7.1
const calcAverage = (a,b,c) => (a+b+c)/3;

// const avgDolphins = calcAverage(44,23,71);
// const avgKoalas = calcAverage(65,54,49);

const avgDolphins = calcAverage(85,54,41);
const avgKoalas = calcAverage(23,34,27);

function checkWinner(Dolphins, Koalas){
    if(Dolphins >= Koalas * 2){
        console.log(`"Dolphins win (${Dolphins} vs. ${Koalas})"`)
    } else if (Koalas >= Dolphins * 2) {
        console.log(`"Koalas win (${Koalas} vs. ${Dolphins})"`)
    } else {
        console.log("No team win")
    }
}

checkWinner(avgDolphins, avgKoalas);

// 4.7.2

const calcTip = bill => bill <= 300 && bill>= 50 ? bill * 0.15 : bill * 0.2;
const bills = [125,55,44];
const tips = [
    calcTip(bills[0]), 
    calcTip(bills[1]), 
    calcTip(bills[2])
];
const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
]
console.log(bills, tips, totals);