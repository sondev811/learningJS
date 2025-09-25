// BÀI TẬP XỬ LÝ CHUỖI - JAVASCRIPT

console.log("=== BÀI TẬP XỬ LÝ CHUỖI ===");

// Bài 1: Viết hoa chữ cái đầu của mỗi từ
function capitalizeWords(str) {
  return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log("Bài 1 - Viết hoa chữ cái đầu:");
console.log(capitalizeWords("hello world javascript")); // "Hello World Javascript"

// Bài 2: Đếm số lần xuất hiện của một ký tự trong chuỗi
function countChar(str, char) {
  return str.split('').filter(c => c === char).length;
}

console.log("\nBài 2 - Đếm ký tự:");
console.log(countChar("javascript", 'a')); // 2

// Bài 3: Kiểm tra chuỗi có phải là palindrome không
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}

console.log("\nBài 3 - Palindrome:");
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("hello")); // false

// Bài 4: Tìm từ dài nhất trong chuỗi
function longestWord(str) {
  const words = str.split(' ');
  return words.reduce((longest, current) => 
    current.length > longest.length ? current : longest
  );
}

console.log("\nBài 4 - Từ dài nhất:");
console.log(longestWord("JavaScript is awesome programming language")); // "programming"

// Bài 5: Loại bỏ khoảng trắng thừa
function removeExtraSpaces(str) {
  return str.replace(/\s+/g, ' ').trim();
}

console.log("\nBài 5 - Loại bỏ khoảng trắng thừa:");
console.log(removeExtraSpaces("  Hello    world   from   JS  ")); // "Hello world from JS"

// Bài 6: Mã hóa Caesar (dịch chuyển ký tự)
function caesarCipher(str, shift) {
  return str.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      const start = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      const shifted = (char.charCodeAt(0) - start + shift) % 26;
      return String.fromCharCode(start + shifted);
    }
    return char;
  }).join('');
}

console.log("\nBài 6 - Mã hóa Caesar:");
console.log(caesarCipher("Hello World", 3)); // "Khoor Zruog"

// Bài 7: Tách chuỗi thành các từ và đếm
function wordFrequency(str) {
  const words = str.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
  const frequency = {};
  
  words.forEach(word => {
    if (word) {
      frequency[word] = (frequency[word] || 0) + 1;
    }
  });
  
  return frequency;
}

console.log("\nBài 7 - Tần suất từ:");
console.log(wordFrequency("Hello world hello javascript world"));

// Bài 8: Kiểm tra email hợp lệ
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

console.log("\nBài 8 - Kiểm tra email:");
console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid-email")); // false

// Bài 9: Tạo slug từ tiêu đề (URL-friendly)
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Loại bỏ ký tự đặc biệt
    .replace(/\s+/g, '-') // Thay khoảng trắng bằng dấu gạch ngang
    .replace(/-+/g, '-') // Loại bỏ dấu gạch ngang liên tiếp
    .trim('-'); // Loại bỏ dấu gạch ngang ở đầu và cuối
}

console.log("\nBài 9 - Tạo slug:");
console.log(createSlug("JavaScript Programming Tutorial 2024!")); // "javascript-programming-tutorial-2024"

// Bài 10: Format số điện thoại Việt Nam
function formatPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
  } else if (cleaned.length === 11) {
    return cleaned.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
  }
  
  return phone; // Trả về nguyên bản nếu không đúng format
}

console.log("\nBài 10 - Format số điện thoại:");
console.log(formatPhoneNumber("0123456789")); // "0123 456 789"
console.log(formatPhoneNumber("01234567890")); // "0123 456 7890"

// Bài 11: Tìm và thay thế từ trong chuỗi (case-insensitive)
function replaceWord(str, oldWord, newWord) {
  const regex = new RegExp(`\\b${oldWord}\\b`, 'gi');
  return str.replace(regex, newWord);
}

console.log("\nBài 11 - Thay thế từ:");
console.log(replaceWord("Hello world, hello everyone", "hello", "hi")); // "hi world, hi everyone"

// Bài 12: Kiểm tra chuỗi có chứa tất cả ký tự của bảng chữ cái không
function isPangram(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerStr = str.toLowerCase();
  return alphabet.split('').every(char => lowerStr.includes(char));
}

console.log("\nBài 12 - Pangram:");
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true

// Bài 13: Đảo ngược từng từ trong chuỗi
function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

console.log("\nBài 13 - Đảo ngược từng từ:");
console.log(reverseWords("Hello World")); // "olleH dlroW"

// Bài 14: Tìm chuỗi con dài nhất không lặp lại
function longestSubstring(str) {
  let longest = '';
  let current = '';
  
  for (let char of str) {
    const index = current.indexOf(char);
    if (index !== -1) {
      current = current.slice(index + 1);
    }
    current += char;
    if (current.length > longest.length) {
      longest = current;
    }
  }
  
  return longest;
}

console.log("\nBài 14 - Chuỗi con dài nhất không lặp:");
console.log(longestSubstring("abcabcbb")); // "abc"

// Bài 15: Format tiền tệ Việt Nam
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
}

console.log("\nBài 15 - Format tiền tệ:");
console.log(formatCurrency(1000000)); // "1.000.000 ₫"

// Bài tập thực hành tổng hợp
console.log("\n=== BÀI TẬP THỰC HÀNH TỔNG HỢP ===");

// Tạo một hệ thống quản lý thông tin người dùng
const userData = {
  fullName: "  NGUYỄN VĂN AN  ",
  email: "nguyenvanan@email.com",
  phone: "0123456789",
  address: "123 Đường ABC, Quận 1, TP.HCM"
};

function processUserData(user) {
  return {
    // Chuẩn hóa tên
    normalizedName: capitalizeWords(user.fullName.trim()),
    
    // Tạo username từ email
    username: user.email.split('@')[0],
    
    // Format số điện thoại
    formattedPhone: formatPhoneNumber(user.phone),
    
    // Tạo slug cho địa chỉ
    addressSlug: createSlug(user.address),
    
    // Kiểm tra tính hợp lệ
    isValidEmail: isValidEmail(user.email),
    isValidPhone: /^[0-9]{10,11}$/.test(user.phone.replace(/\D/g, ''))
  };
}

console.log("Xử lý thông tin người dùng:");
console.log(processUserData(userData));

console.log("\n=== KẾT THÚC BÀI TẬP CHUỖI ===");
