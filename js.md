1. Biến, Kiểu Dữ Liệu, Toán Tử
# Khai báo biến:
+ let, var: có thể gán lại
+ const: không gán lại, (giá trị tham chiếu có thể thay đổi nội dung).

# Kiểu dữ liệu cơ bản (primitive)
string, number, boolean, null, undefined, bigint, symbol, object (bao gồm array, function, Date)

isNaN(data): Kiểm tra đó có phải số hay không
isNaN("1") => true
isNaN("js") => false 

# Chuyển kiểu nhanh
Number('42')   // 42
String(123)    // '123'
Boolean('')    // false
Boolean('0')   // true
+'5'           // 5
!!0            // false

# Truthy/Falsy
Falsy: 0, -0, '', null, undefined, NaN, false.
Còn lại đa số là truthy (kể cả '0', [], {}).

# Toán tử số học: +, -, *, /, %, **, ++, --

# Toán tử gán: =, +=, -=, *=, /=, %=, **=;

# Nối chuỗi
"1" + 2 => "12"
 1 + "2" => "12"
 1 + 2 + "3" => "33"

 # So sánh
 ===, ==
 0 == false // true
 0 === false // false // số và boolean
 null == undefined // true // không có giá trị
 null === undefined // false 

 # Toán tử 3 ngôi
 ? :

 # Typeof : xem kiểu dữ liệu

2. Câu điều kiện, vòng lặp, hàm
# if, else, switch case
const n = 7;
if (n % 2 === 0) console.log('Even'); else console.log('Odd');

const day = 3;
switch (day) {
  case 1: console.log('Mon'); break;
  case 2: console.log('Tue'); break;
  case 3: console.log('Wed'); break;
  default: console.log('Other');
}

# Vòng lặp
## for: 
for (let i = 0; i < 3; i++) console.log(i); 

## for of: (có thể continue và break)
for (const v of [10, 20, 30]) console.log(v);

## for in: lặp phần tử trong object  (có thể continue và break)
const user = { name: 'A', age: 20 };
for (const k in user) console.log(k, user[k]);

## forEach (không có continue và break, không có return)
['a','b','c'].forEach((ch, i) => console.log(i, ch));

## map (lặp và biến đổi các item trong mảng)
const doubled = [1,2,3].map(x => x * 2);

# Hàm

## Cách khai báo
function sum(a, b) {
  return a + b;
}

const multiply = function(a, b) {
  return a * b;
};

arrow function
const divide = (a, b) => a / b;

## gọi hàm
sum(1, 2);
multiply(1, 2);
divide(1, 2);

## Tham số mặc định, rest parameter
function greet(name = 'Guest') {
  return `Hello, ${name}`;
}

## Final return
function safeDivide(a, b) {
  if (b === 0) return null;
  return a / b;
}

## Phạm vi và hoisting
hoisted(); // OK
function hoisted() {
  console.log('I am hoisted');
}

// const/let expression thì KHÔNG hoist khả dụng
// notHoisted(); // ReferenceError
const notHoisted = () => {};

## IIFE (Khai báo và gọi hàm)
(function() {
  const secret = 42;
  console.log('IIFE run once');
})();

## Callback
function handle(value, fn) {
  return fn(value);
}
const sum = (value) => value + value
handle(5, sum);


3. Mảng(xử lý mảng), Object(xử lý object)
