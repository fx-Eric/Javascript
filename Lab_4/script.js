// Lab 4.1. Hàm (10 phút)
// Viết hàm 'describeCountry' nhận ba tham số: 'country', 'population' và 'capitalCity'. Dựa vào input này, hàm trả về string với định dạng như sau: 'Finland has 6 million people and its capital city is Helsinki'.
// Gọi hàm này 3 lần với dữ liệu đầu vào cho 3 nước khác nhau. Lưu các giá trị trả về ở 3 biến khác nhau, và in chúng ra console.
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const vietnam = describeCountry("vietnam", 100, "HaNoi");
const japan = describeCountry("japan", 83, "tokyo");
const america = describeCountry("America", 320, "newyork");

// Lab 4.2. Khai báo hàm với biểu thức hàm (20 phút)
// Dân số thế giới là 7.9 tỷ người. Tạo khai báo hàm 'percentageOfWorld1' nhận một giá trị 'population' và trả về phần trăm dân số thế giới theo dân số đã cho. Ví dụ: Trung Quốc có 1.441 tỷ người, chiếm 18.2% dân số thế giới.
// Để tính phần trăm, chia giá trị 'population' đã biết cho 7900 rồi nhân với 100.
// Gọi 'percentageOfWorld1' cho 3 dân số của các quốc gia bất kỳ, lưu kết quả vào các biến và in chúng ra console.
// Tạo biểu thức hàm thực hiện điều tương tự, gọi là 'percentageOfWorld2' và cũng gọi nó với 3 dân số theo quốc gia (có thể có cùng số dân).
function percentageOfWorld1(population){
    const worldPopulation = 7900;
    return population / worldPopulation * 100;
}

// const percentVietNam = percentageOfWorld1(100); console.log(percentVietNam);
// const percentJapan = percentageOfWorld1(83); console.log(percentJapan);
// const percentAmerica = percentageOfWorld1(320); console.log(percentAmerica); 

const percentageOfWorld2 = function (population){
    const worldPopulation = 7900;
    return population / worldPopulation * 100;
}
// const percentVietNam = percentageOfWorld2(100); console.log(percentVietNam);
// const percentJapan = percentageOfWorld2(83); console.log(percentJapan);
// const percentAmerica = percentageOfWorld2(320); console.log(percentAmerica); 

// Lab 4.3. Hàm mũi tên (5 phút)
// Thực hiện lại bài lab trước, nhưng lần này hãy tạo một hàm mũi tên là 'percentageOfWorld3'.
const percentageOfWorld3 = population => population / 7900 * 100;
// const percentVietNam = percentageOfWorld3(100); console.log(percentVietNam);
// const percentJapan = percentageOfWorld3(83); console.log(percentJapan);
// const percentAmerica = percentageOfWorld3(320); console.log(percentAmerica); 

// Lab 4.4. Hàm gọi hàm (15 phút)
// Tạo một hàm là 'describePopulation'. Sử dụng kiểu hàm mà bạn muốn nhất. Hàm này nhận hai đối số là 'country' và 'population', và trả về string như sau: 'China has 1441 million people, which is about 18.2% of the world'.
// Để tính phần trăm 'describePopulation', hãy gọi 'percentageOfWorld1' mà bạn đã tạo trước đó.
// Gọi 'describePopulation' với dữ liệu cho 3 nước bất kỳ.
const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world` 
const china = describePopulation("China", 1440);
    
// Lab 4.5. Giới thiệu về Array (15 phút)
// Tạo một array chứa 4 giá trị dân số của 4 quốc gia bất kỳ. Bạn có thể sử dụng các giá trị đã dùng trước đó. Lưu array này vào một biến là 'populations'.
// In ra console xem liệu array có 4 phần tử hay không (true hoặc false).
// Tạo một array là 'percentages' có chứa phần trăm dân số thế giới của 4 giá trị dân số đó. Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó để tính toán 4 giá trị phần trăm.
const populations = [100, 1440, 83, 120];
const percentages = [percentageOfWorld1(100), percentageOfWorld1(1440), percentageOfWorld1(83), percentageOfWorld1(120)] 

// Lab 4.6. Các phép toán cơ bản với array (25 phút)
// Tạo một array chứa tất cả các nước láng giềng của một nước bất kỳ. Chọn một nước có ít nhất 2 hoặc 3 nước láng giềng. Lưu array vào biến 'neighbours'.
// Ở một số thời điểm, một đất nước mới là 'Utopia' được tạo ra trong vùng lân cận của quốc gia bạn chọn. Vậy hãy thêm nó vào cuối array 'neighbours'.
// Không may, sau một thời gian, nước mới này biến mất. Vậy hãy xóa nó khỏi cuối array.
// Nếu array 'neighbours' không chứa nước 'Germany', hãy in ra console rằng: 'Probably not a central European country :D'.
// Thay đổi tên của một trong các nước láng giềng của bạn. Để thực hiện điều đó, hãy tìm chỉ mục của đất nước trong array 'neighbours', rồi sử dụng nó để thay đổi array ở vị trí chỉ mục đó. Chẳng hạn, nếu bạn tìm thấy 'Sweden' trong array, hãy thay nó bằng 'Republic of Sweden'.

const neighbours = ["china", "lao", 'Cam'];
neighbours.push("Utopia");
neighbours.shift();

if(!neighbours.includes("Germany")){
    console.log("Probably not a central European country :D");
}

neighbours[1] = 'Philipin';


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