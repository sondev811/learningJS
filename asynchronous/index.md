# 🧠 LẬP TRÌNH BẤT ĐỒNG BỘ TRONG JAVASCRIPT

1️⃣ Giới thiệu bài
Trong JavaScript, hầu hết các thao tác I/O (đọc file, truy cập API) **không được thực hiện ngay lập tức**.  
Nếu các tác vụ đó chạy đồng bộ, toàn bộ chương trình sẽ bị “đóng băng” cho đến khi hoàn thành.  
Vì vậy, **lập trình bất đồng bộ (asynchronous programming)** ra đời để giúp JavaScript xử lý nhiều công việc mà không chặn luồng chính.

### 🔍 Ví dụ thực tế
- **Load dữ liệu API:** Gọi dữ liệu từ server bằng `fetch()`.
- **Đọc file:** Sử dụng `fs.readFile()` trong Node.js.
- **Xử lý I/O:** Ví dụ đọc dữ liệu cảm biến, gửi request mạng, hoặc tương tác cơ sở dữ liệu.


2️⃣ Khái niệm đồng bộ & bất đồng bộ
🧩 Đồng bộ (Synchronous)
- Mỗi tác vụ phải hoàn thành xong trước khi tác vụ tiếp theo được thực hiện.
- Nếu một tác vụ tốn thời gian, chương trình sẽ bị “đứng”.
console.log(1)
console.log(1)   
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)

⚡ Bất đồng bộ (Asynchronous)
- Các tác vụ có thể chạy song song, không chặn luồng chính.
- JavaScript tiếp tục xử lý phần khác trong khi chờ kết quả của tác vụ bất đồng bộ.

3️⃣ Cơ chế hoạt động của JS: Call Stack, Event Loop, Callback Queue

### Call Stack
- Nơi lưu các hàm đang được gọi.
- Khi một hàm kết thúc, nó bị “pop” ra khỏi stack.

### Callback Queue
- Nơi chứa các callback được hoãn lại (như từ setTimeout, fetch, I/O).
- Khi Call Stack trống, Event Loop sẽ đưa các callback từ Queue vào Stack để thực thi.

### Event Loop
- Là “người quan sát” giữa Stack và Queue.
- Liên tục kiểm tra xem Stack có trống không → nếu trống, đẩy callback từ Callback Queue vào Call Stack để thực thi.




4️⃣ Callback và vấn đề Callback Hell
## Callback
- Là hàm được truyền làm đối số cho hàm khác, và chỉ được gọi khi tác vụ hoàn tất.

function getData(callback) {
  setTimeout(() => {
    console.log("Dữ liệu đã tải xong");
    callback();
  }, 1000);
}

getData(() => console.log("Tiếp tục xử lý")); -->

## Callback Hell
- Callback Hell là tình huống xảy ra khi có quá nhiều callback lồng vào nhau, khiến code trở nên khó đọc và khó bảo trì.

getUser((userInfo) => {
  // lấy id của user
  getPosts(userInfo.id, (posts) => {
    for(let i = 0; i < posts.length; i++) {
      getComments(posts[i].id, (comments) => {
        console.log(comments);
      });
    }
  });
});

5️⃣ Promise
- Promise là một đối tượng đại diện cho một giá trị chưa biết (pending) hoặc đã biết (fulfilled/rejected).
- Promise có ba trạng thái:
  - Pending (đang chờ): Trạng thái ban đầu, chưa hoàn thành.
  - Fulfilled (thành công): Giá trị đã được trả về.
  - Rejected (thất bại): Giá trị đã bị trả về với lỗi.

const promise = new Promise((resolve, reject) => {
  //Đăng nhập fb
  const result = fetch("https://jsonplaceholder.typicode.com/users/1");
  if (result === "Thành công") resolve("Đăng nhập thành công");
  else reject("Đăng nhập thất bại");
})then(result => console.log(result)).catch(err => console.error(err));

.then() và .catch()
.then() dùng để xử lý khi Promise thành công
.catch() dùng để xử lý khi Promise thất bại

VD: fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Lỗi:", err));

## Giải quyết callback hell
Promise Chain
getUser()
  .then(user => {
    // 👉 return Promise để then sau nhận được kết quả của nó
    return getPosts(user.id);
  })
  .then(posts => {
    // posts là kết quả của getPosts() ở trên
    return getComments(posts[0].id);
  })
  .then(comments => {
    // comments là kết quả của getComments()
    console.log(comments);
  })
  .catch(err => console.error(err));

⚡ Promise.all()

Chạy song song nhiều Promise và chờ tất cả hoàn thành.

VD: Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
  fetch("https://jsonplaceholder.typicode.com/users/2").then(res => res.json()),
])
  .then(data => console.log(data))
  .catch(err => console.error(err));

6️⃣ Async / Await
🧱 Cú pháp async, await

- async biến một hàm bình thường thành hàm trả về Promise.
- await giúp “tạm dừng” trong khi chờ Promise hoàn tất (chỉ dùng trong hàm async).

VD: async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Lỗi:", error);
  }
}

🛠 Xử lý lỗi với try...catch
async function fetchData() {
  try {
    const res = await fetch("https://wrong-url.com");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Lỗi xảy ra:", err);
  }
}

fetchData();

⚖️ So sánh                Promise                           Async/Await
Cú pháp             Dùng .then() và .catch()          Dùng await và try/catch
Độ dễ đọc           Có thể rối khi chain nhiều       Giống lập trình tuần tự, dễ hiểu
Xử lý song song     Dễ với Promise.all()               Cần kết hợp Promise.all()


Bài tập
### 🧠 Bài 1: Cơ bản với `setTimeout`

**Yêu cầu:**  
Bài 1: Viết chương trình in ra thứ tự sau:
Bắt đầu
Đang xử lý...
Hoàn tất!


Bài 2: Callback đơn giản
Viết hàm downloadFile(url, callback) mô phỏng việc tải file mất 3 giây, sau khi tải xong thì gọi callback để thông báo "Tải xong: <url>".

// Gọi hàm downloadFile
downloadFile("https://example.com/file.txt", (url) => {
  console.log(`Tải xong: ${url}`);
});

Bài 3: Callback hell
Mô phỏng việc tải 3 file liên tiếp bằng callback:
file1 → file2 → file3
Mỗi file mất 1 giây để “tải”.

🔗 Bài 4: Promise cơ bản
Yêu cầu:
Viết hàm getUser() trả về Promise mô phỏng việc lấy dữ liệu người dùng sau 2 giây. Dữ liệu mẫu { id: 1, name: "Sơn" }

Bài 5: Promise chain
Yêu cầu:
Giả sử có các hàm:

function getUser() {
  return Promise.resolve({ id: 1, name: "Sơn" });
}

function getPosts(userId) {
  return Promise.resolve([
    { id: 101, title: "Bài viết 1", userId },
    { id: 102, title: "Bài viết 2", userId }
  ]);
}

function getComments(postId) {
  return Promise.resolve([
    { id: 1001, text: "Hay lắm!", postId }
  ]);
}

Hãy viết Promise chain để:

Lấy user

Lấy danh sách bài viết của user đó

Lấy comment của bài viết đầu tiên

In ra comment cuối cùng.

⚙️ Bài 6: Promise.all()

Yêu cầu:
Gọi song song 2 API:

https://jsonplaceholder.typicode.com/users/1

https://jsonplaceholder.typicode.com/posts/1

và in ra kết quả khi cả hai hoàn thành.

🧩 Bài 8: So sánh Promise vs Async/Await

Yêu cầu:
Viết hai hàm có chức năng giống nhau:

Sử dụng Promise chain

Sử dụng async/await

Cả hai đều:

Gọi getUser()

Sau đó getPosts(user.id)

In ra bài viết đầu tiên.

Quan sát sự khác biệt về độ dễ đọc giữa hai cách viết.
