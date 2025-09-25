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
  // code here, using reduce
}

console.log("\nBài 4 - Từ dài nhất:");
console.log(longestWord("JavaScript is awesome programming language")); // "programming"

// Bài 5: Loại bỏ khoảng trắng thừa
function removeExtraSpaces(str) {
  // code here
}

console.log("\nBài 5 - Loại bỏ khoảng trắng thừa:");
console.log(removeExtraSpaces("  Hello    world   from   JS  ")); // "Hello world from JS"

// Bài 6: Tìm và thay thế từ trong chuỗi (case-insensitive)
function replaceWord(str, oldWord, newWord) {
}

console.log("\nBài 6 - Thay thế từ:");
console.log(replaceWord("Hello world, hello everyone", "hello", "hi")); // "hi world, hi everyone"

// Bài 7: Đảo ngược từng từ trong chuỗi
function reverseWords(str) {
}

console.log("\nBài 13 - Đảo ngược từng từ:");
console.log(reverseWords("Hello World")); // "olleH dlroW"
