
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);

const getPost = (userId) => {
  console.log("Đang tải post...");
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
};

const getUser = () => {
  console.log("Đang tải user...");
  return fetch(`https://jsonplaceholder.typicode.com/users/1`);
};

const getComment = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment loaded");
    }, 1000);
  });
}

// getUser()
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(`Đã lấy được thông tin user: ${data?.username} ${data?.id}`);
//     return getPost(data.id)
//   })
//   .then((res) => res.json())
//   .then((data) => getComment(data?.postId))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
//   fetch("https://jsonplaceholder.typicode.com/users/2").then(res => res.json()),
// ]).then(data => console.log(data)).catch(err => console.log(err));

const getUserById = (id) => {
  console.log("Đang tải user...");
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
};

async function fetchData() {
  try {
    console.time("fetchData");
    const [res1, res2] = await Promise.all([
      getUserById(1), // 1s
      getUserById(2) // 1s
    ]);
    const user1 = await res1.json();
    const user2 = await res2.json();
    console.timeEnd("fetchData");

    console.time("fetchData1");
    const res11 = await getUserById(1); 
    const res22 = await getUserById(2); 
    const user11 = await res11.json();
    const user22 = await res22.json();
    console.timeEnd("fetchData1");
    // console.log(user1, "user1");
    // console.log(user2, "user2");

    console.log("kq") // 15s
    // const user = await res.json();
    // const resPost = await getPost(user.id);
    // const post = await resPost.json();
    // console.log(post);
  } catch (error) {
    console.log(error);    
  }
}

fetchData()

const fetchData1 = async () => {

}