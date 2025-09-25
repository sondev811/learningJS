const users = [
  { id: 1, name: "An", age: 18 },
  { id: 2, name: "Bình", age: 22 },
  { id: 3, name: "Chi", age: 16 },
];
const words = ["hello", "world", "js"];
const text = "abcde";

// sử dụng filter để lọc ra các phần tử có value là số => trả về 1 mảng mới với các phần tử đã được lọc
const person = { name: "Dat", age: 25, city: "Hanoi" }; // chuyển object thành mảng
// Object.keys(person): // lấy ra mảng bảo gồm tất cả key của object => ["name", "age", "city"]
console.log(Object.keys(person)); // ["name", "age", "city"] // lấy ra mảng chưa các key của object
const mang = Object.keys(person).filter(key => {
  const value = person[key];
  // if (!isNaN(value)) { // isNaN: không phải là số, thì phủ định không phải là số => nó là số.
  //   return key;
  // }
  if (typeof value === "number") {
    return key;
  }
});
console.log(mang);
// Bài 1: Tính tổng các phần tử trong numbers.
// Bài 2: In từng số trong numbers cho đến khi gặp số lớn hơn 3.
// Bài 3: Đếm số phần tử chẵn trong numbers.

// scope:

// Có thể sử dụng break và continue: for, for of, for in, filter
// Không thể forEach, map

const numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log("sum: ", sum);
let nhandoiphantu = numbers.map((number) => {
  // if (number % 2 === 0) {
  //   return number + "là số chẵn";
  // }
  // return number + "là số lẻ";
});
console.log("nhandoiphantu: ", nhandoiphantu);
// mảng nhân đổi phần tử [2, 4]
// number = 1;

var biendem = 0;
// number = 1; không phải số chẵn
// number = 2; phải số chẵn => a = 1;
// number = 3; không phải số chẵn;
// number = 4; phải số chẵn => a = 2;
// number = 5; không phải số chẵn;

// continue: bỏ qua các dòng lênh ở dưới và chạy tiếp tới phần tử tiếp theo
// break: thoát khỏi vòng lặp

// nếu là số lẻ sẽ không làm gì, ngược lại số chẵn sẽ tăng biến đếm lên 1

// nếu là số chẵn tăng biến đếm lên 1, nếu là số lẻ không làm gì

for(let number of numbers){
  if (number === 2) { // là số lẻ
    break;
  }
  biendem += 1;
} 
console.log(a);


// Bài 4: Tạo mảng chứa mỗi phần tử của numbers nhân đôi.
// Bài 5: In từng ký tự trong text. (dùng for of)
// Bài 6: In ra “key: value” của person.
// Bài 7: Tạo mảng các key của person chỉ gồm những key có value kiểu số.
  // tạo mảng => const mang = [];
  // lặp qua các phần tử trong object để kiểm value có phải là số hay không
  // nếu là số thì thêm key vào mảng

// Bài 8: Dung map để tạo mảng names chỉ gồm tên từ users.
// Bài 9: Dùng map để tạo mảng {label: "An (18)", value: 1} từ users.
// Bài 10: (kết hợp filter + map): Lấy tên những người có age >= 18 trong users (gợi ý: filter rồi map).