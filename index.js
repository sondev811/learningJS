// let a = 1; 
// console.log("b", b);
// var b = 1; // hoisting
// const c = 1; // hằng 

// a = 2;
// b = 2;

// console.table([a, b, c]);

// Number 
// const v = 1;
// const va = 1;
// console.log(v == va);
// console.log(typeof v);

console.log("1"); // giá trị là số nhưng kiểu giữ liệu là string
console.log(1); // giá trị là số nhưng kiểu giữ liệu là number
console.log(isNaN("a"), "isNaN(a)");
console.log(isNaN("1"), "isNaN(1)"); // is not a number

const arNum =[1, 2, 3]; //trả về tổng các phần tử trong mảng 123 
let sum = 0;
for (let i = 0; i < arNum.length; i++) {
  const arNumItem = arNum[i];
  if (!isNaN(arNumItem)) { // phủ định của không phải là số => thì nó là số
    sum += String(arNumItem);
  }
}
// i = 0; sum = 0; => sum = "1";
// i = 1; sum = "1"; => sum = "12";
// i = 2; sum = "12"; => sum = "123";
// 1 + "3" => "13"
// "3" => 3

console.log(sum, "sum");

const a1 = false; // true Boolean(0) false, Boolean("") false, Boolean(null) false, Boolean(undefined) false
console.log(Boolean(null), "Boolean(null)");
console.log(Boolean(undefined), "Boolean(undefined)");
if (a1) {
  console.log("a1 is false");
} else {
  console.log("a1 is true");
}

// 1 + "2" => "12"
let name1 = "John4";
console.log("Tôi tên là " + name1);

// 2 % 2 = 0
// 3 % 2 = 1

// // string;
// const v2 = "1";
// console.log(typeof v2);

// // boolean
// const v3 = true;
// console.log(typeof v3);

// let b = undefined; // không có giá trị

// let a = null; // không có giá trị
// let c; // undefined
// console.log(typeof a);
// console.log(typeof b);

// object { key: value } // Không được trùng key

const v3 = {}; // khởi tạo object rỗng
const v31 = new Object(); // khởi tạo object rỗng

const v4 = { // new address
  name: "John",
  age: 20,
  c: undefined,
  b: null,
  a: { // new address
    name: "John"
  }
} 

console.log(v4.name);
// v4.age = "abc"; // thay đổi giá trị trong object
// console.log(v4.name);

const v6 = v4; // v6 đang được trỏ đến địa chỉ của v4
v6.name = "abc1";
console.log(v6, "v6");
console.log(v4, "v4");

let a = 1;
let b = a;

b = 2;
console.log(a, "a");
console.log(b, "b");

// const v5 = { // new address
//   name: "John",
//   age: 20,
//   name: "Jane",
//   c: undefined,
//   b: null,
//   a: { // new address
//     name: "John"
//   }
// }

// // 
// let v6 = v5;




// console.log(v4.name === v5.name, "v4.name === v5.name") // true
// console.log(v4.a.name === v5.a.name, "v4.a === v5.a") // false
// console.log(v4 == v5);

let aar1 = new Array(); // khởi tạo mảng rỗng, trỏ đến 1 địa chỉ

let arr = [1, 2, 3]; // khởi tạo mảng rỗng, trỏ đến 1 địa chỉ, kiểu dữ liệu là object
// arr.push(1);// thêm phần tử vào cuối mảng
// arr.unshift(2); // thêm phần tử vào đầu mảng
const item1 = arr.pop(); // lấy ra phần tử cuối mảng
const item2 = arr.shift(); // lấy ra phần tử đầu mảng

console.log(arr, "arr");
console.log("item1: ", item1); //number
console.log("item2: ", item2); //number

function aFunc () {};
console.log(aFunc, typeof aFunc);

const date = {
  getTime: () => {
    // làm gì đó
    return 1;
  }
}

const aDate = new Date(); // object
aDate.getTime(); // để lấy thời gian
date.getTime(); // để lấy thời gian

let sum2 = 0;
for (let i = 0; i < 10; i++) {
  sum2 += 10;
}

//So sánh
let a2 = 1
let b2 = "1";
// == so sánh giá trị
console.log(a2 == b2, "a2 == b2");

// === so sánh giá trị và kiểu dữ liệu
console.log(a2 === b2, "a2 === b2");

if (a2 === b2) {

}

// toán tử 3 ngôi
let a11 = 0;

if (a11 === 1) {
  console.log("a11 là 1");
}
else {
  console.log("a11 không phải là 1");
}

console.log(a11 === 1 ? "a11 là 1" : "a11 không phải là 1");


const day = 1;

switch (day) {
  case 1: console.log('Mon'); break;
  case 2: console.log('Tue'); break;
  case 3: console.log('Wed'); break;
  default: console.log('Other');
}

if (day === 1) {
  console.log('Mon');
} else if (day === 2) {
  console.log('Tue');
} else if (day === 3) {
  console.log('Wed');
} else {
  console.log('Other')
}
