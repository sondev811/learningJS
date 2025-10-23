//1. Giới thiệu DOM

// DOM (Document Object Model) là mô hình đối tượng của tài liệu HTML.

// Trình duyệt chuyển HTML → thành cây DOM (Document Tree).

// Mỗi phần tử HTML tương ứng với một “node” trong cây DOM.

// JS có thể:

// Đọc nội dung

// Thay đổi nội dung, thuộc tính, CSS

// Thêm hoặc xóa phần tử

// Gắn sự kiện (click, input, …)

// 2. Truy cập phần tử DOM
// DOM cung cấp nhiều phương thức để tìm và truy cập các phần tử HTML.
// Các phương thức phổ biến:

document.getElementById('id');
// document.getElementById('id'): Trả về một phần tử duy nhất có thuộc tính id trùng với chuỗi truyền vào. Nếu không tìm thấy → trả về null.
// Lưu ý: 
// ID trong HTML phải là duy nhất trong toàn bộ trang.
// Đây là cách nhanh nhất và phổ biến nhất để truy cập phần tử.

// document.getElementsByClassName('className'): Trả về một danh sách (HTMLCollection) gồm các phần tử có class trùng với tên được chỉ định.
// Lưu ý: 
// Trả về nhiều phần tử, nên cần truy cập bằng chỉ số [0], [1]...
// Không dùng được các phương thức như forEach() trực tiếp — cần chuyển sang mảng?

document.getElementsByClassName('className');
// document.getElementsByTagName('tagName'): Trả về danh sách (HTMLCollection) chứa tất cả phần tử có tên thẻ tương ứng.
// Ví dụ: 'p', 'div', 'input', 'li'...
// Giống getElementsByClassName nhưng tìm theo tên thẻ.

document.querySelector('selector')
// Trả về phần tử đầu tiên khớp với CSS selector được truyền vào. Nếu không tìm thấy trả về null
// Cho phép chọn phần tử linh hoạt, giống cú pháp CSS (.class, #id, tag[attr=value], …).

document.querySelectorAll('selector')
// Trả về tất cả phần tử khớp với CSS selector trong một NodeList.
// Có thể dùng forEach() trực tiếp.
// Dùng khi cần chọn nhiều phần tử giống nhau.

// document.getElementsByTagName()

{/* <ul>
  <li class="fruit">Táo</li>
  <li class="fruit">Cam</li>
  <li class="fruit">Chuối</li>
</ul>

// HTMLCollection: 
// Là tập hợp các phần tử HTML (Element).
// Live collection → nghĩa là nó tự động cập nhật khi DOM thay đổi.
// Không phải là mảng thực, nên không có phương thức forEach(), map(), filter()...

// vd:
{/*

<script>
  const items = document.getElementsByTagName('li');
  console.log(items.length); // 2

  const newLi = document.createElement('li');
  newLi.textContent = 'Chuối';
  document.getElementById('list').appendChild(newLi);

  console.log(items.length); // 3 ✅ Tự động cập nhật
</script> */}
// HTMLCollection thấy ngay phần tử mới, dù không gọi lại hàm.

// NodeList:
// Là danh sách các node trong DOM.
// Node có thể là Element, Text, … (không chỉ phần tử HTML).
// Static collection → nghĩa là nó không tự cập nhật khi DOM thay đổi.
// Có thể dùng được forEach()...

// vd:
{/* <ul id="list">
  <li>Táo</li>
  <li>Cam</li>
</ul>

<script>
  const nodes = document.querySelectorAll('li');
  console.log(nodes.length); // 2

  const newLi = document.createElement('li');
  newLi.textContent = 'Chuối';
  document.getElementById('list').appendChild(newLi);

  console.log(nodes.length); // ❌ vẫn là 2 — KHÔNG cập nhật
</script> */}
// NodeList không tự thấy phần tử mới.

// 3. Thay đổi nội dung và thuộc tính
// p.textContent = "Chào bạn!";
// p.innerHTML = "<b>Chào bạn!</b>";

// Thay đổi thuộc tính attr
// const img = document.querySelector('img');
// img.src = 'new-image.jpg';
// img.alt = 'Ảnh mới';

// Thay đổi CSS:
// p.style.color = 'red';
// p.style.fontSize = '20px';


//4. Tạo – Thêm – Xóa phần tử
const newDiv = document.createElement('div');
newDiv.textContent = "Đây là phần tử mới";

// Thêm vào dom: 
document.body.appendChild(newDiv);

// Xoá phần tử
newDiv.remove();

// 5. Xử lý sự kiện (Events)
{/* <button id="btn">Bấm tôi</button>
<p id="msg">Nội dung ban đầu</p>

<script>
  const btn = document.getElementById("btn");
  const msg = document.getElementById("msg");

  btn.addEventListener("click", function() {
    msg.textContent = "Bạn vừa bấm nút!";
    msg.style.color = "blue";
  });
</script> */}

// Bài tập nhỏ: Tạo “máy tính cộng” đơn giản

// Tạo 1 trang web có:
// Một ô nhập tên người dùng.
// Nút “Chào”.
// Khi bấm, hiển thị “Xin chào [Tên]!” bên dưới.
// Nâng cấp: Nếu người dùng không nhập tên, hiển thị cảnh báo “Vui lòng nhập tên!”.

