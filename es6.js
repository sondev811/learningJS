// ===== BÀI GIẢNG ES6 (ECMAScript 2015) =====
// const string = "abc123edf456cd3"; // length 12
// const spliceNumberFromString = (str) => {
//   let stringTemp = "";
//   const arr = [];
//   const currentArr = str.split("");
//   // a =>
//   currentArr.forEach((char, index) => {
//     if (!isNaN(char)) { // is not a number => không phải là số => là số
//       stringTemp += char;
//     }
//     if (isNaN(char) && stringTemp) {
//       arr.push(Number(stringTemp));
//       stringTemp = "";
//     }
//     if (currentArr.length - 1 === index && stringTemp) {
//       arr.push(Number(stringTemp));
//     }
//   })
//   return arr;
// }
// ["123", "456" , "3"]
// const rs = spliceNumberFromString(string);
// console.log(rs);

// 1. LET VÀ CONST - Thay thế cho VAR
console.log("\n1. LET VÀ CONST:");

// var có function scope
function varExample() {
  if (true) {
    var x = 1; // hoisting
  }
  console.log("var x:", x); // 1 - có thể truy cập được
}
varExample();

// let có block scope
function letExample() {
  if (true) {
    let y = 2;
    const PI = 3.14;
    console.log("let y trong block:", y); // 2
    console.log("const PI trong block:", PI); // 2
  }
  // console.log(y); // Lỗi: y is not defined
  // console.log(PI)
}
letExample();

// const - không thể thay đổi giá trị
const PI = 3.14159;
const arr = [1, 2, 3];
console.log("const PI:", arr);
arr[1] = 1; // Lỗi: Assignment to constant variable
console.log("const PI:", arr);

// 2. ARROW FUNCTIONS
console.log("\n2. ARROW FUNCTIONS:");

// Function truyền thống(regular function)
// hoisting: lúc chương trình chạy sẽ đưa các hàm các biến có lên trên đầu file để khởi tạo
console.log(traditionalFunction(1, 1)); // có hoisting nên có thể gọi trước khi khởi tạo
function traditionalFunction(a, b) {
  return a + b;
}

// Arrow function
console.log(arrowFunction(1, 2)); // không thể gọi arrow function trươc khi khởi tạo
const arrowFunction = (a, b) => a + b; //shorthand(viết tắt)
const arrowFunction2 = (a, b) => {
  return a + b;
};

console.log("Traditional:", traditionalFunction(5, 3));
console.log("Arrow:", arrowFunction(5, 3));

// Arrow function với một tham số
const square = (x) => x * x;
if (true) c = a + b;

console.log("Square of 4:", square(4));

// Arrow function không có tham số
const sayHello = () => "Hello ES6!";
console.log(sayHello());

// 3. TEMPLATE LITERALS
console.log("\n3. TEMPLATE LITERALS:");

const name1 = "Nguyễn Văn A";
// const age = 25;

// Cách cũ
const oldWay = "Tên: " + name1 + ", Tuổi: " + age;
console.log("Cách cũ:", oldWay);

// Template literals
const newWay = `Tên: ${name1}, Tuổi: ${age}`;
console.log("Template literals:", newWay);

// Multiline strings
const multiline = `Khi chưa có ES thì có một đặc tả ngôn ngữ kịch bản 
được phát triển bởi Brendan Eich của Netscape 
và nó có tên là Mocha. Sau đó nó được đổi tên thành LiveScript 
và cuối cùng là Javascript. Vào 12-1995, Sun Microsystem và 
Netscape đã công bố Javascript. Tháng 3 - 1996 trình duyệt
 Netscape Navigator 2.0 ra đời và hỗ trợ Javascript. Sau đó,
  Microsoft ra mắt một ngôn ngữ tương tự tên là JScript để cạnh 
  tranh và tránh vấn đề bản quyền. JScript được thêm vào trong Internet
   Explorer 3.0 và ra mắt vào tháng 8, 1996.`;
console.log("Multiline:", multiline);

// 4. DESTRUCTURING ASSIGNMENT
console.log("\n4. DESTRUCTURING:");

// Array destructuring
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [bla1, bla2, third, four, five, ...abc] = numbers;
console.log("First:", first, "Second:", second, third, four, five, abc);

// Object destructuring
const person = {
  fullName: "Trần Thị B",
  age: 30,
  city: "Hà Nội",
  country: "Việt Nam",
  balance: null,
  bla: 1
};

const a = (person) => {
  console.log(person)
}

const name2 = 1;
const age1 = 20;
const bd = "2020"
const name3 = 1;
const age2 = 20;
const bd1 = "2020"

a({ name2, age1, bd, name3, age2, bd1 });
// person1["name2"] = name2;
// person1["age1"] = age1;
// person1["bd"] = bd;
// person1["name3"] = name3;
// person1["age2"] = age2;
// person1["bd1"] = bd1;
// console.log(person1)

console.log(person.fullName)

const { fullName1, age, city, country } = person;
// console.log("Name:", fullName1, "Age:", age, "City:", city );

// Destructuring trong function parameters
const printPersonInfo = (person) => {
  const { fullName, age, city, country } = person;
  console.log(`${balance}, ${fullName} tuổi, sống tại ${age} ${country} ${city}`);
};
printPersonInfo(person);

// 5. DEFAULT PARAMETERS
console.log("\n5. DEFAULT PARAMETERS:");

// Cách cũ
function oldGreeting(name) {
  name = name || "Khách"; // ||: nếu cái bên trái mà null hoặc undefined hoặc 0 thì sẽ lấy bên phải 
  return "Xin chào " + name;
}
console.log(oldGreeting("Son")); // Xin chào Khách

// ES6 way
const newGreeting = (a, b = 10) => a * b;

console.log(newGreeting(2, 3)); // Xin chào Khách

// 6. REST VÀ SPREAD OPERATORS
console.log("\n6. REST VÀ SPREAD:");

// Rest operator - thu thập các tham số
const sum = (...args) => {
  console.log(args);
};
console.log("Sum:", sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 100, 231));

function abc(args, args1, args2, args4) {
  console.log(args, args1, args2, args4);
}

abc(1,2,3,4,5)

// Spread operator - mở rộng array
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6];
const arr3 = [5, 6, 7]
const combined = [...arr1, ...arr2, ...arr3];
console.log("Combined array:", combined);

// Spread với objects
const obj1 = { a: 1, c: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log("Combined object:", combinedObj);

//Tới đây
// 7. ENHANCED OBJECT LITERALS
console.log("\n7. ENHANCED OBJECT LITERALS:");

const x = 10;
const y = 20;

// Cách cũ
const oldObj = {
  x: x,
  y: y,
  calculate: function () {
    return this.x + this.y;
  },
};

// ES6 way
const newObj = {
  x, // shorthand property
  y,
  calculate() {
    // method shorthand
    return this.x + this.y;
  },
  // computed property names
  [`prop_${x}`]: "dynamic property",
};

console.log("Old object:", oldObj.calculate());
console.log("New object:", newObj.calculate());
console.log("Dynamic property:", newObj.prop_10);

// 8. MODULES (Import/Export)
console.log("\n9. MODULES:");
console.log("// Export examples:");
console.log("export const PI = 3.14159;");
console.log("export function add(a, b) { return a + b; }");
console.log("export default class Calculator { }");
console.log("");
console.log("// Import examples:");
console.log("import { PI, add } from './math.js';");
console.log("import Calculator from './calculator.js';");
console.log("import * as MathUtils from './math.js';");

// 10. PROMISES
console.log("\n10. PROMISES:");

// Tạo Promise
const fetchData = (success = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Dữ liệu đã được tải thành công!");
      } else {
        reject("Lỗi khi tải dữ liệu!");
      }
    }, 1000);
  });
};

// Sử dụng Promise
console.log("Đang tải dữ liệu...");
fetchData(true)
  .then((data) => console.log("Success:", data))
  .catch((error) => console.log("Error:", error));

// Promise chaining
const processData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Processed: ${data}`);
    }, 500);
  });
};

fetchData(true)
  .then((data) => processData(data))
  .then((processedData) => console.log("Final result:", processedData))
  .catch((error) => console.log("Chain error:", error));

// 11. ARRAY METHODS MỚI
console.log("\n11. ARRAY METHODS:");

const fruits = ["apple", "banana", "orange", "grape"];

// find() - tìm phần tử đầu tiên thỏa mãn điều kiện
const longFruit = fruits.find((fruit) => fruit.length > 5);
console.log("Long fruit:", longFruit);

// findIndex() - tìm index của phần tử đầu tiên thỏa mãn
const longFruitIndex = fruits.findIndex((fruit) => fruit.length > 5);
console.log("Long fruit index:", longFruitIndex);

// includes() - kiểm tra có chứa phần tử không
console.log("Has apple:", fruits.includes("apple"));

// Array.from() - tạo array từ array-like object
const realArray = Array.from({ length: 10 }, () => 1 + 2);
console.log("Array from object:", realArray);

// 12. MAP VÀ SET
console.log("\n12. MAP VÀ SET:");

// Map - key-value pairs với key có thể là bất kỳ type nào
const myMap = new Map();
myMap.set("name", "John");
myMap.set(1, "number key");
myMap.set(true, "boolean key");

console.log("Map size:", myMap.size);
console.log("Get name:", myMap.get("name"));
console.log("Has key 1:", myMap.has(1));

// Iterate over Map
for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// Set - collection of unique values
const mySet = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log("Set:", mySet); // {1, 2, 3, 4, 5}
console.log("Set size:", mySet.size);

mySet.add(6);
console.log("After adding 6:", mySet);

// 13. SO SÁNH MAP, SET VÀ OBJECT
console.log("\n13. SO SÁNH MAP, SET VÀ OBJECT:");

console.log("=== OBJECT vs MAP ===");

// OBJECT - Cách truyền thống
const objTraditional = {
  name: "John",
  age: 30,
  1: "number key as string",
};

console.log("Object keys:", Object.keys(objTraditional)); // ['1', 'name', 'age']
console.log("Object size:", Object.keys(objTraditional).length);

// MAP - ES6
const mapES6 = new Map();
mapES6.set("name", "John");
mapES6.set("age", 30);
mapES6.set(1, "actual number key");
mapES6.set(true, "boolean key");
mapES6.set({ id: 1 }, "object key");

console.log("Map size:", mapES6.size);
console.log("Map has number key 1:", mapES6.has(1));

console.log("\n--- Key Types ---");
// Object: chỉ string
const objKey = {
  string: "value1",
  123: "converted to string",
};
console.log("Object keys always strings:", Object.keys(objKey)); // ['123', 'string']

// Map: bất kỳ type nào
const mapKey = new Map();
mapKey.set("string", "string key");
mapKey.set(123, "number key");
mapKey.set(true, "boolean key");
mapKey.set([1, 2, 3], "array key");
mapKey.set({ a: 1 }, "object key");

console.log("Map can have any key type:");
for (let [key, value] of mapKey) {
  console.log(`${typeof key} key:`, key, "=>", value);
}

console.log("\n--- Size/Length ---");
const testObj = { a: 1, b: 2, c: 3 };
const testMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

console.log("Object size (manual):", Object.keys(testObj).length);
console.log("Map size (built-in):", testMap.size);

console.log("\n--- Iteration ---");
console.log("Object iteration (for...in):");
for (let key in testObj) {
  console.log(`${key}: ${testObj[key]}`);
}

console.log("Map iteration (for...of):");
for (let [key, value] of testMap) {
  console.log(`${key}: ${value}`);
}

// performance
const perfObj = {};
const perfMap = new Map();
console.log("Adding elements:");
console.time("Object add");
for (let i = 0; i < 1000; i++) {
  perfObj[i] = i;
}
console.timeEnd("Object add");

console.time("Map add");
for (let i = 0; i < 1000; i++) {
  perfMap.set(i, i);
}
console.log("Map get:", perfMap.get(1));
console.timeEnd("Map add");

console.log("\n=== ARRAY vs SET ===");

// ARRAY - có thể chứa duplicate
const arrayWithDuplicates = [1, 2, 2, 3, 3, 3, 4];
console.log("Array with duplicates:", arrayWithDuplicates);
console.log("Array length:", arrayWithDuplicates.length);

// SET - chỉ chứa unique values
const setUnique = new Set([1, 2, 2, 3, 3, 3, 4]);
console.log("Set (unique only):", setUnique);
console.log("Set size:", setUnique.size);

console.log("\n--- Checking existence ---");
const largeArray = Array.from({ length: 10000 }, (_, i) => i);
const largeSet = new Set(largeArray);

console.time("Array includes");
largeArray.includes(9999);
console.timeEnd("Array includes");

console.time("Set has");
largeSet.has(9999);
console.timeEnd("Set has");

// Removing duplicates
const arrayWithDups = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(arrayWithDups)];
console.log("Remove duplicates:", arrayWithDups, "=>", uniqueArray);

console.log("\n=== WHEN TO USE WHAT? ===");
console.log(`
📋 OBJECT - Use when:
   • Cần record/dictionary với string keys
   • Đang làm việc với JSON data
   • Cần methods và prototype inheritance

🗺️  MAP - Use when:
   • Keys không phải là strings (numbers, objects, etc.)
   • Cần frequently add/remove key-value pairs
   • Cần iterate in insertion order
   • Cần biết kích thước dễ dàng

📚 ARRAY - Use when:
   • Cần dữ liệu có thứ tự
   • Cần chấp nhận duplicate values
   • Cần array methods (map, filter, reduce)
   • Cần truy cập elements theo index

🎯 SET - Use when:
   • Cần các giá trị unique
   • Cần kiểm tra sự tồn tại
   • Cần xóa duplicates
   • Không cần truy cập theo index
`);

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: User preferences (Object)
const userPreferences = {
  theme: "dark",
  language: "vi",
  notifications: true,
  getTheme() {
    return this.theme;
  },
};
console.log("User preferences (Object):", userPreferences.getTheme());

// Example 2: Cache system (Map)
const cache = new Map();
const cacheKey = { userId: 123 };
cache.set(cacheKey, { name: "John", data: "..." });
console.log("Cache lookup (Map):", cache.get(cacheKey));

// Example 3: Shopping cart (Array)
const shoppingCart = [
  { id: 1, name: "Laptop", quantity: 1 },
  { id: 2, name: "Mouse", quantity: 2 },
  { id: 1, name: "Laptop", quantity: 1 }, // Duplicate allowed
];
console.log("Shopping cart items (Array):", shoppingCart.length);

// Example 4: Visited pages (Set)
const visitedPages = new Set();
visitedPages.add("/home");
visitedPages.add("/about");
visitedPages.add("/home"); // Won't be added again
console.log("Unique visited pages (Set):", visitedPages.size);

// 14. ITERATORS VÀ FOR...OF
console.log("\n14. ITERATORS VÀ FOR...OF:");

const iterableArray = [10, 20, 30];

// for...of với array
console.log("For...of with array:");
for (const value of iterableArray) {
  console.log(value);
}

// for...of với string
console.log("For...of with string:");
for (const char of "Hello") {
  console.log(char);
}

// for...of với Map
console.log("For...of with Map:");
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// 17. ASYNC/AWAIT (ES2017 nhưng liên quan đến Promises)
console.log("\n17. ASYNC/AWAIT:");

async function fetchUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchData(true);
    const processedData = await processData(userData);
    console.log("Async result:", processedData);
    return processedData;
  } catch (error) {
    console.log("Async error:", error);
  }
}

// Gọi async function
fetchUserData();

// 18. OBJECT METHODS MỚI
console.log("\n18. OBJECT METHODS:");

const obj = { a: 1, b: 2, c: 3 };

// Object.keys(), Object.values(), Object.entries()
console.log("Object keys:", Object.keys(obj));
console.log("Object values:", Object.values(obj));
console.log("Object entries:", Object.entries(obj));

// Object.assign() - copy properties
const source = { d: 4, e: 5 };
const merged = Object.assign({}, obj, source);
console.log("Merged object:", merged);

// 19. STRING METHODS MỚI
console.log("\n19. STRING METHODS:");

const str = "Hello World";

console.log("Starts with 'Hello':", str.startsWith("Hello"));
console.log("Ends with 'World':", str.endsWith("World"));
console.log("Includes 'lo Wo':", str.includes("lo Wo"));
console.log("Repeat 3 times:", "Ha".repeat(3));

// 20. NUMBER METHODS MỚI
console.log("\n20. NUMBER METHODS:");

console.log("Is integer:", Number.isInteger(42));
console.log("Is integer:", Number.isInteger(42.5));
console.log("Is finite:", Number.isFinite(42));
console.log("Is finite:", Number.isFinite(Infinity));
console.log("Is NaN:", Number.isNaN(NaN));
console.log("Is NaN:", Number.isNaN("hello"));
