// BÀI TẬP XỬ LÝ CHUỖI - JAVASCRIPT

console.log("=== BÀI TẬP XỬ LÝ CHUỖI ===");

// Bài 1: Viết hoa chữ cái đầu của mỗi từ
// Bài 2: Đếm số lần xuất hiện của một ký tự trong chuỗi
// Bài 3: Kiểm tra chuỗi có phải là palindrome không
function isPalindrome(str) {
  // code here
}
console.log("\nBài 3 - Palindrome:");
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("hello")); // false

// Bài 4: Tìm từ dài nhất trong chuỗi
function longestWord(str) {
  // let longestWord = ""; //
  // // = gán
  // // === so sánh bằng
  // for (let b of arr) {
  //   if (b.length > longestWord.length) {
  //     longestWord = b;
  //   }
  // }
  // return longestWord;
  const arr = str.split(" "); // duyệt mảng, ["Javascript", "is", ...]
  return arr.reduce((longestWord, item) => {
    // 9          11
    if (item.length > longestWord.length) {
      return item; // programming
    }
    return longestWord;
  }, "");
}
console.log(longestWord("JavaScript is awesome programming language"));
// "programming"
console.log("\nBài 4 - Từ dài nhất:");

// Bài 5: Loại bỏ khoảng trắng thừa
function removeExtraSpaces(str) {
  return str.split(" ");
  // code here
  // loại bỏ khoảng cách đầu và cuối
  // chuyển sang mảng split(" ") =>  ["Hello", "", "", "", "World", "", "from", "", "JS"];
  // filter và chỉ lấy phần tử có độ dài
  // filter so sánh phần tử trong mảng !== "" => 1 cách để làm
  // join(" ");
}

console.log("\nBài 5 - Loại bỏ khoảng trắng thừa:");
console.log(removeExtraSpaces("Hello    world   from   JS")); // "Hello world from JS"

// Bài 6: Tìm và thay thế từ trong chuỗi (case-insensitive)
function replaceWord(str, oldWord, newWord) {
  // sử dụng replace
}

console.log("\nBài 6 - Thay thế từ:");
console.log(replaceWord("Hello world, hello everyone", "hello", "hi")); // "hi world, hi everyone"

// ["o", "l", "l", "e", "H"] => olleH
const reverseStr = (str) => str.split("").reverse().join("");
// Bài 7: Đảo ngược từng từ trong chuỗi
function reverseWords(str) {
  // chuyển thành mảng ["Hello", "Word"]
  const arr = str.split(" "); // ["Hello", "Word"] Hello => olleH
  // duyệt mảng bằng map và đảo ngược từng phần tử trong mảng
  const newArr = arr.map(item => item.split("").reverse().join("")); // ["olleH", ...]
  return newArr.join(" "); // "olleH dlroW"
} 

console.log("\nBài 13 - Đảo ngược từng từ:");
console.log(reverseWords("Hello World")); // "olleH dlroW"

// [1,2,2,3,3,3,4,4,5] => [1, 2, 3, 4, 5]
const removeDuplicate = (arr) => {
  const newArr = []; 
  arr.forEach(number => {
    // cách tìm kiếm 1
    const index = newArr.findIndex(item => {
      if (item === number) {
        return item;
      }
    });

    // cách tìm kiếm 2
    if (!newArr.includes(number)) {
      newArr.push(number);
    }
  });
  return newArr;
}
// [1,2,2,3,3,3,4,4,5] => {1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }
const removeDuplicate1 = (arr) => {
  const obj = {};
  for(const number of arr) {
    obj[number] = number;
  }
  return Object.values(obj);
}


console.log(removeDuplicate1([1,2,2,3,3,3,4,4,5]))
// object { key: value }
const obj = {age: 12};
obj.name = 1;
obj.name = 2;
console.log(obj.age); // 12
console.log(obj["age"]); // 12
console.log(obj)
const stringArr = ["son", "dev"]
console.log(stringArr.includes("son"));
console.log(![1,2,3].includes(3));
console.log(removeDuplicate([1,2,2,3,3,3,4,4,5]))