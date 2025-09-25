// BÀI TẬP TỔNG HỢP - CHUỖI VÀ MẢNG

console.log("=== BÀI TẬP TỔNG HỢP CHUỖI VÀ MẢNG ===");

// Dữ liệu mẫu
const students = [
  { id: 1, name: "Nguyễn Văn An", email: "an.nguyen@email.com", score: 85 },
  { id: 2, name: "Trần Thị Bình", email: "binh.tran@email.com", score: 92 },
  { id: 3, name: "Lê Văn Chi", email: "chi.le@email.com", score: 78 },
  { id: 4, name: "Phạm Thị Dung", email: "dung.pham@email.com", score: 88 },
  { id: 5, name: "Hoàng Văn Em", email: "em.hoang@email.com", score: 95 }
];

const products = [
  { id: 1, name: "Laptop Dell XPS 13", price: "25,000,000", category: "Electronics" },
  { id: 2, name: "iPhone 15 Pro", price: "30,000,000", category: "Electronics" },
  { id: 3, name: "Samsung Galaxy S24", price: "22,000,000", category: "Electronics" },
  { id: 4, name: "MacBook Air M2", price: "28,000,000", category: "Electronics" },
  { id: 5, name: "Nike Air Max", price: "3,500,000", category: "Fashion" }
];

const textData = "JavaScript là ngôn ngữ lập trình phổ biến. JavaScript được sử dụng rộng rãi trong phát triển web.";

// Bài 1: Xử lý danh sách sinh viên
console.log("\n=== BÀI 1: XỬ LÝ DANH SÁCH SINH VIÊN ===");

// 1.1: Tạo danh sách tên sinh viên (chỉ lấy tên, không có họ)
function getFirstNames(students) {
  return students.map(student => {
    const nameParts = student.name.split(' ');
    return nameParts[nameParts.length - 1]; // Lấy tên cuối cùng
  });
}

console.log("Tên sinh viên:", getFirstNames(students));

// 1.2: Tạo username từ email
function createUsernames(students) {
  return students.map(student => ({
    ...student,
    username: student.email.split('@')[0]
  }));
}

console.log("Sinh viên với username:", createUsernames(students));

// 1.3: Phân loại sinh viên theo điểm số
function categorizeStudents(students) {
  return students.reduce((categories, student) => {
    if (student.score >= 90) {
      categories.excellent.push(student);
    } else if (student.score >= 80) {
      categories.good.push(student);
    } else if (student.score >= 70) {
      categories.average.push(student);
    } else {
      categories.poor.push(student);
    }
    return categories;
  }, { excellent: [], good: [], average: [], poor: [] });
}

console.log("Phân loại sinh viên:", categorizeStudents(students));

// Bài 2: Xử lý sản phẩm
console.log("\n=== BÀI 2: XỬ LÝ SẢN PHẨM ===");

// 2.1: Chuyển đổi giá từ chuỗi sang số
function parsePrice(priceString) {
  return parseInt(priceString.replace(/,/g, ''));
}

function addNumericPrice(products) {
  return products.map(product => ({
    ...product,
    priceNumeric: parsePrice(product.price)
  }));
}

console.log("Sản phẩm với giá số:", addNumericPrice(products));

// 2.2: Tìm sản phẩm có giá cao nhất và thấp nhất
function findPriceRange(products) {
  const productsWithPrice = addNumericPrice(products);
  const prices = productsWithPrice.map(p => p.priceNumeric);
  
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  
  const mostExpensive = productsWithPrice.find(p => p.priceNumeric === maxPrice);
  const cheapest = productsWithPrice.find(p => p.priceNumeric === minPrice);
  
  return { mostExpensive, cheapest, maxPrice, minPrice };
}

console.log("Phân tích giá sản phẩm:", findPriceRange(products));

// 2.3: Nhóm sản phẩm theo danh mục
function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});
}

console.log("Nhóm sản phẩm theo danh mục:", groupByCategory(products));

// Bài 3: Xử lý văn bản
console.log("\n=== BÀI 3: XỬ LÝ VĂN BẢN ===");

// 3.1: Đếm tần suất từ
function wordFrequency(text) {
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, '') // Loại bỏ dấu câu
    .split(/\s+/)
    .filter(word => word.length > 0);
  
  return words.reduce((frequency, word) => {
    frequency[word] = (frequency[word] || 0) + 1;
    return frequency;
  }, {});
}

console.log("Tần suất từ:", wordFrequency(textData));

// 3.2: Tìm từ dài nhất và ngắn nhất
function findWordLengths(text) {
  const words = text.replace(/[^\w\s]/g, '').split(/\s+/);
  
  const longest = words.reduce((longest, current) => 
    current.length > longest.length ? current : longest
  );
  
  const shortest = words.reduce((shortest, current) => 
    current.length < shortest.length ? current : shortest
  );
  
  return { longest, shortest, longestLength: longest.length, shortestLength: shortest.length };
}

console.log("Phân tích độ dài từ:", findWordLengths(textData));

// 3.3: Tạo tóm tắt văn bản (lấy câu đầu tiên)
function createSummary(text, maxLength = 100) {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const firstSentence = sentences[0].trim();
  
  if (firstSentence.length <= maxLength) {
    return firstSentence;
  }
  
  return firstSentence.substring(0, maxLength) + "...";
}

console.log("Tóm tắt văn bản:", createSummary(textData));

// Bài 4: Tìm kiếm và lọc dữ liệu
console.log("\n=== BÀI 4: TÌM KIẾM VÀ LỌC DỮ LIỆU ===");

// 4.1: Tìm kiếm sinh viên theo tên (không phân biệt hoa thường)
function searchStudents(students, searchTerm) {
  const term = searchTerm.toLowerCase();
  return students.filter(student => 
    student.name.toLowerCase().includes(term) ||
    student.email.toLowerCase().includes(term)
  );
}

console.log("Tìm kiếm 'an':", searchStudents(students, "an"));

// 4.2: Lọc sản phẩm theo khoảng giá
function filterProductsByPrice(products, minPrice, maxPrice) {
  const productsWithPrice = addNumericPrice(products);
  return productsWithPrice.filter(product => 
    product.priceNumeric >= minPrice && product.priceNumeric <= maxPrice
  );
}

console.log("Sản phẩm từ 20-30 triệu:", filterProductsByPrice(products, 20000000, 30000000));

// 4.3: Sắp xếp sinh viên theo điểm số
function sortStudentsByScore(students, ascending = true) {
  return [...students].sort((a, b) => 
    ascending ? a.score - b.score : b.score - a.score
  );
}

console.log("Sinh viên theo điểm (giảm dần):", sortStudentsByScore(students, false));

// Bài 5: Thống kê và báo cáo
console.log("\n=== BÀI 5: THỐNG KÊ VÀ BÁO CÁO ===");

// 5.1: Thống kê điểm số sinh viên
function getScoreStatistics(students) {
  const scores = students.map(s => s.score);
  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = total / scores.length;
  const max = Math.max(...scores);
  const min = Math.min(...scores);
  
  // Tính điểm trung vị
  const sortedScores = [...scores].sort((a, b) => a - b);
  const median = sortedScores.length % 2 === 0
    ? (sortedScores[sortedScores.length / 2 - 1] + sortedScores[sortedScores.length / 2]) / 2
    : sortedScores[Math.floor(sortedScores.length / 2)];
  
  return {
    total,
    average: Math.round(average * 100) / 100,
    max,
    min,
    median,
    count: scores.length
  };
}

console.log("Thống kê điểm số:", getScoreStatistics(students));

// 5.2: Báo cáo tổng hợp sản phẩm
function generateProductReport(products) {
  const productsWithPrice = addNumericPrice(products);
  const totalValue = productsWithPrice.reduce((sum, p) => sum + p.priceNumeric, 0);
  const averagePrice = totalValue / products.length;
  
  const categoryStats = Object.entries(groupByCategory(products)).map(([category, items]) => ({
    category,
    count: items.length,
    totalValue: items.reduce((sum, item) => sum + parsePrice(item.price), 0)
  }));
  
  return {
    totalProducts: products.length,
    totalValue,
    averagePrice: Math.round(averagePrice),
    categoryStats
  };
}

console.log("Báo cáo sản phẩm:", generateProductReport(products));

// Bài 6: Xử lý dữ liệu phức tạp
console.log("\n=== BÀI 6: XỬ LÝ DỮ LIỆU PHỨC TẠP ===");

// 6.1: Tạo bảng xếp hạng sinh viên
function createRanking(students) {
  const sortedStudents = sortStudentsByScore(students, false);
  return sortedStudents.map((student, index) => ({
    rank: index + 1,
    name: student.name,
    score: student.score,
    grade: student.score >= 90 ? 'A' : 
           student.score >= 80 ? 'B' : 
           student.score >= 70 ? 'C' : 'D'
  }));
}

console.log("Bảng xếp hạng:", createRanking(students));

// 6.2: Tạo mã sản phẩm tự động
function generateProductCodes(products) {
  return products.map((product, index) => {
    const categoryCode = product.category.substring(0, 3).toUpperCase();
    const idCode = String(index + 1).padStart(3, '0');
    return {
      ...product,
      productCode: `${categoryCode}-${idCode}`
    };
  });
}

console.log("Sản phẩm với mã:", generateProductCodes(products));

// 6.3: Tạo email thông báo cho sinh viên
function generateNotificationEmails(students) {
  return students.map(student => {
    const grade = student.score >= 90 ? 'A' : 
                  student.score >= 80 ? 'B' : 
                  student.score >= 70 ? 'C' : 'D';
    
    const message = student.score >= 80 
      ? `Chúc mừng! Bạn đã đạt điểm ${student.score} (Xếp loại: ${grade})`
      : `Bạn cần cố gắng thêm. Điểm hiện tại: ${student.score} (Xếp loại: ${grade})`;
    
    return {
      to: student.email,
      subject: `Kết quả học tập - ${student.name}`,
      message: message
    };
  });
}

console.log("Email thông báo:", generateNotificationEmails(students));

console.log("\n=== KẾT THÚC BÀI TẬP TỔNG HỢP ===");
