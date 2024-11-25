function printForecast(arr){
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}ºC in day ${i+1} `;
    }
    console.log(str);
}
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);