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
  
