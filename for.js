// for
const n = 10;
const numbers = [1, 2, 3, 4, 5]; // length = 5
const so1 = numbers[0];
const so3 = numbers[2];

// for bình thường
for(let i = 1; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for of
for(const num of numbers) {
  console.log("num: ", num);
}

// for in (lặp các phần tử trong object)
const object1 = {name: "son", age: "29"};
// cách 1: object1.name => "Son"
// cách 2: object1["name"] => "Son"
for(const key in object1) {
  console.log("key: ", key, "value: ", object1[key]);
}

const numbersForEach = [1, 2, 3, 4, 5]; // length = 5;

// callback function

numbersForEach.forEach((item, index) => {
  console.log("value:", item, "| index: ", index);
});

const numbersMap = [1, 2, 3, 4, 5]; // length = 5;
console.log("numbersMap: ", numbersMap);

// map trả về 1 mảng mới với những item được biến đổi theo điều kiện
const dataMap = numbersMap.map((item) => {
  return item * 2;
});

console.log(dataMap, "dataMap");

