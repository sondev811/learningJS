// XỬ LÝ CHUỖI (STRING) TRONG JAVASCRIPT

// Phạm vi hoạt động(scope)
// var phạm vi hoạt động toàn cục(global scope), có hoisting
// let, const // phạm vi hoạt động trong block scope({}) , không có hoisting

// function test() {
// }

// 1. Khai báo chuỗi
const str1 = "Hello World";
const str11 = "Hello World";
const str12 = "Hello World";
const str13 = "Hello World";
const str2 =
  "JavaScript" + "," + str1 + "," + str11 + "," + str12 + "," + str13;
const str3 = `Template literal 
${str1}, ${str11}, ${str12}, ${str13}
123`; // ES6
console.log(str3);
console.log("Chuỗi cơ bản:", str1, str2, str3);

// 2. Các phương thức cơ bản của chuỗi
const text = "  JavaScript Programming  ";

// Độ dài chuỗi
console.log("Độ dài:", text.length); // array: const numbers = [1, 2, 3, 4, 5]; // numbers.length

// Chuyển đổi chữ hoa/thường
console.log("Chữ hoa:", "son".toUpperCase());
console.log("Chữ thường:", "SON".toLowerCase());

// Loại bỏ khoảng trắng
console.log("Trim:", text.trim());
console.log("Trim start:", text.trimStart());
console.log("Trim end:", text.trimEnd());

// Tìm kiếm và thay thế
console.log("Index of 'Script':", "  JavaScript Scrip  ".indexOf("Script"));
console.log("Includes 'Java':", "  JavaScript Programming  ".includes("Java"));
const a = ["apple", "banana", "orange"];
a.includes("banana");
console.log("Starts with 'Java':", "JavaScript Programming".startsWith("Java"));
console.log("Ends with 'ing':", text.endsWith("ing"));

// Cắt chuỗi(trích xuất phần tử của chuỗi)
const text2 = "JavaScript Programming";
console.log("Substring(2, 8):", text2.substring(2)); // từ vị trí 2 đến 7
console.log("Slice(2, 8):", text2.slice(2, 8)); // từ vị trí 2 đến 7
console.log("Slice(0, 5):", text2.slice(2)); // từ vị trí 5 đến hết
console.log("Slice(-5):", text2.substring(-5)); // 5 ký tự cuối
// Slice có thể nhận vị trí âm
// Substring không nhận vị trí âm => Nếu truyền một chỉ số âm, nó sẽ được coi là 0.
console.log("Slice(0, 5):", text2.substring(-1)); // từ vị trí 0 đến hết

// Thay thế
console.log(
  "Replace:",
  "JavaScript Programming".replace("JavaScript", "Python")
);

// Chia chuỗi thành mảng
const words = "apple banana orange".split(" "); // biến đổi chuỗi thành mảng
console.log("Split:", words);

// Nối mảng thành chuỗi
// const fruits = ["apple", "banana", "orange"];
console.log("Join:", fruits.join(","));

// 3. Xử lý chuỗi nâng cao
console.log("\n=== XỬ LÝ CHUỖI NÂNG CAO ===");

// Template literals (ES6)
const name = "Nguyễn Văn A";
const age = 25;
const message = `Xin chào, tôi là ${name}, năm nay ${age} tuổi.`;
console.log("Template literal:", message);

// Multiline string
const multiline = `
  Dòng 1
  Dòng 2
  Dòng 3
`;
console.log("Multiline:", multiline);

// 6. Các hàm tiện ích xử lý chuỗi
console.log("\n=== HÀM TIỆN ÍCH ===");

// Viết hoa chữ cái đầu
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// a[0] => "apple"

// Đảo ngược chuỗi
function reverseString(str) {
  return str.split("").reverse().join("");
}

// "SonDev" => "veDnoS"
// ["S", "o", "n", "D", "e", "v"] => ["v", "e", "D", "n", "o", "S"] => "veDnoS"

// 7. So sánh chuỗi
console.log("\n=== SO SÁNH CHUỖI ===");

const strA = "apple";
const strB = "Apple";
const strC = "APPLE";

console.log("strA === strB:", strA === strB); // false
console.log(
  "strA.toLowerCase() === strB.toLowerCase():",
  strA.toLowerCase() === strB.toLowerCase()
); // true

// concat: nối mảng
// const fruits2 = ["apple1", "banana2"`, "orange3"];
// const fruits3 = fruits.concat(fruits`2);
// console.log("fruits3:");

// const fruits = [4, 2, 6, 1]; // tất cả phần tử trong mảng có phải là số chẵn hay không
const isAllString = fruits.every((item) => item % 2 === 0); // tất cả thoả điều kiện sẽ trả về tru, ngược lại false
console.log("isAllEven: ", isAllEven);

const isExistEven = fruits.some((item) => item % 2 === 0); // ít nhất 1 phần tử thoả điều kiện sẽ trả về true, ngược lại false
console.log("isExistEven: ", isExistEven);

const filter = fruits.filter((item) => item % 2 === 0); // trả về mảng mới(địa chỉ khác mảng ban đầu)
console.log("isAllString: ", isAllString);

const fruits = [4, 4, [2, 3, 5, [6, 7, 8, [9, 10, 11]]], "string", 6, 1]; // tất cả phần tử trong mảng có phải là số chẵn hay không
// => [1, 2, 4, 4, 6];

const temp = [];
for (const item of fruits) {
  if (!Array.isArray(item)) {
    temp.push(item);
    continue;
  }
  for (const item2 of item) {
    if (!Array.isArray(item2)) {
      temp.push(item2);
      continue;
    }
    for (const item3 of item2) {
      temp.push(item3);
    }
  }
}
console.log("temp: ", temp);
console.log("fruits.flat(): ", fruits.flat());

const fruits1 = [
  4,
  4,
  [2, 3, 5, [6, 7, 8, [9, 10, 11, [12, 13, 14, [1, 2]]]]],
  "string",
  6,
  1,
]; // tất cả phần tử trong mảng có phải là số chẵn hay không
console.log("fruits1.flat(Infinity): ", fruits1.flat(Infinity)); // số vô cùng

// làm thay đổi mảng ban đầu
fruits1.sort((a, b) => a - b); // sắp xếp tăng dần
fruits1.sort((a, b) => b - a); // sắp xếp giảm dần

// reduce: chuyển đổi mảng về 1 kết quả [4, 5, 6] => 16
const fruits2 = [4, 5, 6];
const sum = fruits2.reduce((acc, item) => acc + item, ); // acc: tích lũy, item: phần tử
const users = [
  {
    name: "John",
    age: 20,
    total: 100,
  },
  {
    name: "Jane",
    age: 21,
    total: 200,
  },
  {
    name: "Jim",
    age: 22,
    total: 300,
  },
];
const sum1 = fruits2.reduce((acc, item) => acc + item.age, 0);
// trả về object

let total = 0;
for (const item of users) {
  total += item.total;
}
console.log("total: ", total);

const sum2 = users.reduce((acc, item) => {
  acc.total += item.total;
  acc.name += item.name;
  return acc;
}, { total: 0, name: "" });
console.log("sum2: ", sum2);

console.log([1, 2, 3]);


// syntax: cú pháp