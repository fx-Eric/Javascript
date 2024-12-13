// Lab 12.1: Phân loại thú cưng
// Julia và Kate đang thực hiện một nghiên cứu trên chó. Mỗi người đã hỏi 5 chủ sở hữu chó về tuổi chú chó của họ và lưu trữ dữ liệu vào một array (mỗi người một array). Hiện tại, họ chỉ muốn biết một chú chó là chó trưởng thành hay chó con.
// Một chú chó được coi là trưởng thành nếu nó ít nhất từ 3 tuổi trở lên, và là chó con nếu nó dưới 3 tuổi.
// 1. Nhiệm vụ của bạn
// Tạo hàm 'checkDogs', nhận 2 array tuổi của chó ('dogJulia' và 'dogKate') và thực hiện những điều sau:
// Julia phát hiện ra rằng chủ nhân của chú chó đầu tiên và cuối cùng thực ra nuôi mèo chứ không phải chó! Vì vậy, hãy tạo một bản sao array của Julia và xóa tuổi mèo khỏi array đã sao chép đó (không nên thay đổi các tham số hàm).
// Tạo một array với cả dữ liệu của Julia (đã sửa) và của Kate.
// Đối với mỗi chú chó còn lại, hãy in ra console đó là chú chó trưởng thành ("Dog number 1 is an adult, and is 5 years old") hay chó con ("Dog number 2 is still a puppy").
// Chạy hàm cho cả hai tập dữ liệu kiểm tra.

// 2. Dữ liệu kiểm tra
// Dữ liệu 1: Dữ liệu của Julia [3, 5, 2, 12, 7], dữ liệu của Kate [4, 1, 15, 8, 3]
// Dữ liệu 2: Dữ liệu của Julia [9, 16, 6, 8, 3], dữ liệu của Kate [10, 5, 6, 1, 4]

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

function checkDogs(dogJulia, dogKate) {
  const newDogJulia = dogJulia.slice(1, dogJulia.length - 1);
  const allDogs = newDogJulia.concat(dogKate);
  allDogs.forEach((dog, index) => {
    if (dog >= 3) {
      console.log(`Dog number ${index + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${index + 1} is still a puppy, and is ${dog} years old`);
    }
  });
}

// Dữ liệu kiểm tra
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);



// Lab 12.2: Chuyển đổi tuổi thú cưng
// Hãy quay trở lại nghiên cứu của Julia và Kate về loài chó. Lần này, họ muốn chuyển đổi tuổi chó sang tuổi người và tính tuổi trung bình của những con chó trong nghiên cứu của họ.
// 1. Nhiệm vụ của bạn:
// Tạo hàm 'calcAverageHumanAge', hàm này nhận array tuổi của chó ('age') và thực hiện những việc sau theo thứ tự:
// Tính tuổi của chó theo năm như tuổi người theo công thức sau: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// Loại trừ tất cả những chú chó có humanAge dưới 18 (điều này cũng giống như việc giữ những chú chó có humanAge từ 18 tuổi trở lên).
// Tính humanage trung bình của các chú chó trưởng thành (bạn nên biết từ những thử thách khác về cách tính trung bình).
// Chạy hàm cho hai tập dữ liệu kiểm tra.
// 2. Dữ liệu kiểm tra:
// Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
// Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]

function calcAverageHumanAge(age) {
  const humanAges = age.map(dogAge => {
    return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
  });
  const adultDogs = humanAges.filter(age => age >= 18);
  const averageAge = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
  return averageAge;
}

// Dữ liệu kiểm tra
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));



// Lab 12.3: Sử dụng Arrow Function
// 1. Nhiệm vụ của bạn
// Viết lại hàm 'calcAverageHumanAge' từ Lab 12.2, nhưng lần này là hàm mũi tên và sử dụng chaining!

const calcAverageHumanAge = age =>
  age
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, age) => acc + age, 0) / age.map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)).filter(humanAge => humanAge >= 18).length;

// Dữ liệu kiểm tra
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// 2. Dữ liệu kiểm tra
// Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
// Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]


