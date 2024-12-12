// Lab 3.1. Chuyển đổi kiểu và ép kiểu (10 phút)
// 1. Dự đoán kết quả của 5 phép toán sau mà không cần thực thi:
// 2. Thực hiện các phép toán để kiểm tra xem bạn đoán đúng không.

'9' - '5' = 4;
'19' - '13' + '17' = '617';
'19' - '13' + 17 = 23;
'123' < 57 = false;
5 + 6 + '4' + 9 - 4 - 2 = 1143;

// Lab 3.2. Toán tử bằng: == với === (40 phút)
// Khai báo biến 'numNeighbours' dựa trên prompt input sau: prompt('How many neighbor countries does your country have?')
// Kiểm tra code với các giá trị 'numNeighbours' khác nhau, gồm 1 và 0.
// Thay == thành ===, và kiểm tra lại code với các giá trị 'numNeighbours' tương tự. Điều gì sẽ xảy ra khi numNeighbours = 1? Tại sao lại như vậy?
// Cuối cùng, chuyển đổi 'numNeighbours' thành một số, và xem điều gì sẽ xảy ra khi bạn nhập vào 1.
// Hãy nêu lý do chúng ta nên sử dụng toán tử === và chuyển đổi kiểu trong trường hợp này.

// const numNeighbours = prompt("How many neighbor countries does your country have?");
// numNeighbours = parseInt(numNeighbours);
// Nếu chỉ có 1 neighbour, hãy in ra console 'Only 1 border!' (sử dụng ==).
// if(numNeighbours === 1){
//     console.log('Only 1 border!');
// } 
// // Sử dụng else-if block để ghi 'More than 1 border' trong trường hợp 'numNeighbours' lớn hơn 1.
// else if (numNeighbours > 1){
//     console.log('More than 1 border');
// }
// // Sử dụng else block để ghi 'No borders' (block này sẽ được thực thi khi 'numNeighbours' là 0 hoặc bất kỳ giá trị nào khác).
// else if (numNeighbours == 0){
//     console.log('No borders');
// }

// Lab 3.3. Toán tử logic (25 phút)
// Hãy vô hiệu hóa code trước đó để prompt không xuất hiện.
// Giả sử Sarah đang tìm một quốc gia mới để sinh sống. Cô ấy muốn ở một đất nước sử dụng ngôn ngữ Tiếng Anh, dân số ít hơn 50 triệu người và không phải đảo quốc.
// Bạn cần tạo các biến tương ứng với tên đất nước, ngôn ngữ, dân số, có phải đảo quốc không. Giá trị các biến này sẽ được nhập bằng hàm prompt.
// Hãy viết một câu lệnh if giúp Sarah tìm kiếm quốc gia phù hợp. Bạn cần viết điều kiện đánh giá  tất cả các tiêu chí của Sarah. Hãy dành thời gian thực hiện điều này.
// Nếu đất nước nhập vào phù hợp, in ra string như sau: 'You should live in <tên đất nước> :)'. Ngược lại, hãy in '<tên đất nước> does not meet your criteria :('


// Lab 3.4. Câu lệnh switch (5 phút)
// Sử dụng câu lệnh switch để ghi string sau cho 'language': 
// Chinese or Mandarin: 'MOST number of native speakers!'
// Spanish: '2nd place in number of native speakers'
// English: '3rd place'
// Hindi: 'Number 4'
// Arabic: '5th most spoken language'
// Tất cả các log đơn giản khác 'Great language too :D'
const language = 'Vietnamese';
switch (language) {
    case "Chinese" : 
    case "Mandarin": console.log("MOST number of native speakers!"); break;
    case "Spanish" : console.log('2nd place in number of native speakers');      break;
    case "English" : console.log('3rd place'); break;
    case "Hindi" : console.log('Number 4'); break;
    case "Arabic" : console.log('5th most spoken language'); break;
    default: console.log('Great language too :D'); break;
}

// Lab 3.5. Toán tử điều kiện (ba ngôi) (10 phút)
// Nếu dân số của đất nước lớn hơn 33 triệu người, sử dụng toán tử ba ngôi để in string sau ra console: 'Portugal's population is above average'. Ngược lại, hãy in 'Portugal's population is below average'. Lưu ý giữa hai câu này chỉ có một từ thay đổi!
// Sau khi kiểm tra kết quả, hãy tạm thay đổi dân số thành 13 rồi thành 130. Hãy xem xét các kết quả khác nhau, rồi đặt dân số về lại ban đầu.
// const PortugalPopulation = 130000000;
const PortugalPopulation = 13000000;
const averagePopulation = 33000000;
PortugalPopulation > averagePopulation ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average");

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