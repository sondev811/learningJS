// Hàm
// argument: tham số

//regular function
function boo(a, b, c) {
  return a + b + c;
}
console.log("boo(1, 2, 3): ", boo(1, 2, 3));

// parameter: đối số
const ketqua = boo(1, 2, 3);
const ketqua1 = ketqua * 2;
const ketqua2 = ketqua * 4;
console.log("ketqua: ", ketqua);

// anonymous (ẩn danh)
const hamkhongten = function(a, b) {
  console.log(a, b);
  return a * b;
}
hamkhongten();

// arrow function
const arrowFunction = (a, b) => {
  const c = a * 2;
  return c / b;
}

hamKhongFunction(2, 2);

const arrowFunction1 = (a, b) => a * b; // shorthand

console.log(arrowFunction1(2, 3));

(() => {
  console.log("hàm nhìn lú")
})();

// Tham số
const arrowFunction2 = (a, b = 3, c) => {
  console.log("a:", a, " b:", b, c);
}
arrowFunction2(2, 2, 3);

const arrowFunction3 = ({ name = "son", age, job }) => {
  console.log(name, age, job);
}

arrowFunction3({
  job: 2,
  age: 1,
});


// regular function có hoisting
// hoisting
var aa; // undefined 
function a () { // khai báo hàm
  aa = 1;
}
a(); // gọi hàm
console.log(aa, "aa");

// arrow function không có hoisting

let bb; // undefined global scope
const b = () => {
  bb = 2;
}; // khai báo hàm
b(); // gọi hàm

console.log(bb, "bb");
