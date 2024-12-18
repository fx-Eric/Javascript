// Lab 13.1: Tạo Object
// 1. Nhiệm vụ của bạn
// Sử dụng một hàm tạo để triển khai 'Car'. Một chiếc ô tô có thuộc tính 'make' và 'speed'. 
// Thuộc tính 'speed' là tốc độ hiện tại của ô tô tính bằng km/h.
// Triển khai phương thức 'accelerate' tăng tốc độ của ô tô thêm 10 km/h và in tốc độ mới ra console.
// Triển khai phương thức 'brake' giảm bớt tốc độ của ô tô 5 km/h và in tốc độ mới ra console.
// Tạo 2 object 'Car' và thử nghiệm với 'accelerate' và 'brake' nhiều lần trên mỗi object.
// 2. Dữ liệu kiểm tra

// Dữ liệu car 1: 'BMW' đi với tốc độ 120 km/h
// Dữ liệu car 2: 'Mercedes' đi với tốc độ 95km/h

function Car(make, speed) {
    this.make = make;
    this.speed = speed;
    this.accelerate = function () {
      this.speed += 10;
      console.log(`${this.speed} km/h`);
    };
    this.brake = function () {
      speed -= 5;
      console.log(`${this.speed} km/h`);
    };
  }
  
  const BMW = new Car('BMW', 120); 
  const Mercedes = new Car('Mercedes', 95);
  
  BMW.accelerate();
  BMW.brake();
  
  Mercedes.accelerate();
  
// Lab 13.2 tạo class
class CarCl {
  constructor(brand, speedKmH) {
    this.brand = brand;
    this.speedKmH = speedKmH;
  }
  get speedUS() {
    return this.speedKmH / 1.6;
  }
  set speedUS(speedInMileH) {
    this.speedKmH = speedInMileH * 1.6;
  }

  accelerate(increase = 10) {
    this.speedKmH += increase;
    console.log(`${this.brand} is accelerating. New speed: ${this.speedKmH} km/h`);
  }

  brake(decrease= 5) {
    this.speedKmH -= decrease; 
    if (this.speedKmH < 0) this.speedKmH = 0; 
    console.log(`${this.brand} is braking. New speed: ${this.speedKmH} km/h`);
  }
  class carEVCL {
    
  }
}

const car1 = new CarCl("BMW", 120); 
const car2 = new CarCl("Mercedes", 95); 

console.log(`Car 1 speed in mile/h: ${car1.speedUS}`);
car1.speedUS = 75; 
console.log(`New speed for BMW in km/h: ${car1.speedKmH}`);

console.log(`Car 2 speed in mile/h: ${car2.speedUS}`);
car2.speedUS = 60;
console.log(`New speed for Mercedes in km/h: ${car2.speedKmH}`);

car1.accelerate(20);
car1.brake(30); 
car2.accelerate(15); 
car2.brake(20); 


// Lab 13.3: Tính kế thừa
// 1. Nhiệm vụ của bạn
// Sử dụng hàm tạo để triển khai Xe điện (được gọi là 'EV') dưới dạng child "class" của 'Car'. 
// Bên cạnh nhãn hiệu và tốc độ hiện tại, 'EV' còn có mức sạc pin hiện tại tính theo % (thuộc tính 'charge')
// Triển khai phương thức 'chargeBattery' có đối số 'chargeTo' và đặt mức sạc pin thành 'chargeTo' 
// Triển khai phương thức 'accelerate' để tăng tốc độ của ô tô thêm 20 km/h và giảm 1% mức pin. 
// Sau đó in ra thông báo như sau 'Tesla going at 140 km/h, with a charge of 22%'
// Tạo object electric car và thử nghiệm với 'accelerate', 'brake' và 'chargeBattery' (sạc đến 90%). 
// Lưu ý điều gì sẽ xảy ra khi bạn tăng tốc! Gợi ý: Xem lại định nghĩa của tính đa hình (polymorphism)
// 2. Dữ liệu kiểm tra
// Dữ liệu car 1: 'Tesla' đi với tốc độ 120 km/h, với mức sạc pin là 23%

class EV extends CarCl{
  constructor(brand, speedKmH, charge = 100){
      super(brand, speedKmH);
      this.charge = charge;
  }
  chargeBattery(chargeTo){
    this.charge = chargeTo;
    console.log(`Current battery is : ${this.charge}%`);
  }
  accelerate(increase = 20){
    this.speedKmH += increase;
    this.charge -= 1;
    console.log(`Tesla going at ${this.speedKmH} km/h, with a charge of ${this.charge}%'`)
  }
}

const electricCar = new EV('EV', 120, 23);
electricCar.accelerate();
electricCar.brake();
electricCar.chargeBattery(90);