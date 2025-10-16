// sort, bublesort....
// 1 2 3 4 5
a.sort((a, b) => {
  return a - b;
});
// sort: sắp xếp
// Làm thay đổi mảng ban đầu;

const a = [1, 2, 3, 4, 5];
a.sort((a, b) => {
  return b - a;
});
console.log(a);


// tìm kiếm: findIndex, find
           // 0
const b = [1, 2, 3, 4, 1];
b.map(() => {

});
// tìm kiếm vị trí findIndex (tìm kiếm vị trí từ trái qua phải, 
// nếu thoả điệu kiện thì trả về vị trí luôn, nếu tìm không thấy trả về -1)
const index = b.findIndex((item) => item === 5);
const filterArr = b.filter((item) => item > 5);
console.log(filterArr);

// tìm kiếm phần tử
const obj = [{ name: "son", age: 1}, {name: "duy", age: 2}, {name: "duy1", age: 2}];
// find (trả về phần tử thoả điều kiện trong mảng, tìm từ trái qua phải, nếu tìm thấy trả về luôn kết quả,
//  nếu không có trả về undefined)
const ketqua = obj.find((item) => {
  if (item.age === 2) {
    return item;
  }
})
console.log(ketqua);

// lọc
const obj1 = [{ name: "son", age: 1}, {name: "duy", age: 2}, {name: "duy1", age: 2}];
const numbers = [1, 2, 3, 4, 5];
// filter: Lọc các phần tử thoả điều kiện và trả về 1 mảng mới(sẽ không làm thay đổi mảng ban đầu).
const numbers1 = numbers.filter((item) => {
  if (item > 2) return item;
})
console.log(numbers.filter(item => item > 2))

console.log(numbers1)

const obj2 = obj1.filter((item) => {
  if (item.age > 1) return item;
});
// obj1.filter(item => item.age > 1); // shorthand
console.log(obj2)

// callback function là một hàm 
// được sử dụng làm tham số truyền vào cho 1 hàm khác.

const abc = (func, b) => {
  return func(b);
}
const cb = (a) => {
  return a * 2;
}
const cc = (a) => {
  return a / 2;
}

console.log(abc(cb, 10));
console.log(abc(cc, 10));







