const container = document.getElementById("container");
console.log("container: ", container);
// tường tác với dom
const newB = document.createElement("b");
newB.textContent = "1";
container.appendChild(newB);

container.innerHTML += "<b>Sơn</b>";
container.innerHTML += "<p>dev</p>";
container.innerHTML += "<p>dev 1</p>";
container.innerHTML += "<p>dev 2</p>";

container.addEventListener("scroll", () => {
  container.style.backgroundColor = "red";
});

container.addEventListener("scrollend", () => {
  container.style.backgroundColor = "white";
});

container.addEventListener("click", () => {
  container.style.backgroundColor = "blue";
});

// container.remove();

const image = document.getElementById("image");
image.src = "https://www.temp-image.com/ib/xUzeQ22j1MyCaEp_1761225110.png";
image.style.width = "1000px";
const title2 = document.getElementById("title2");
console.log("title2", title2);

const getAllClass = document.getElementsByClassName("container");
const arr = [...getAllClass];
for (let i = 0; i < getAllClass.length - 1; i++) {}
console.log("getAllClass: ", getAllClass);
// console.log("getAllClass[0];: ", getAllClass[3]);
// console.log("window: ", window);

// const getQuerySelector1 = document.querySelector(".container")
// console.log("getQuerySelector: ", getQuerySelector1);
// const getQuerySelector2 = document.querySelector("#title")
// console.log("getQuerySelector2: ", getQuerySelector2);

const getAttr = document.querySelector("h2[anyalt='123']");
console.log("getAttr: ", getAttr);
if (getAttr) {
  getAttr.innerHTML = "ABC1";
  console.log("yes");
}

const getAll = document.querySelectorAll(".container");
console.log("getAll: ", getAll);

const h1s = document.getElementsByTagName("button");
console.log("h1s: ", h1s);

const items = document.querySelectorAll("li");
console.log(items.length); // 2

const newLi = document.createElement("li");
newLi.textContent = "Chuối";
document.getElementById("list").appendChild(newLi);

console.log(items.length); // 2 ✅ T

// callback function:

document.addEventListener("click", () => {
  // console.log("click")
});

document.addEventListener("scroll", () => {
  // console.log("scrolling");
});

// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   const title2 = document.getElementById("title2");
//   title2.style.color = "red";
//   console.log("123");
// })
// console.log(btn);

// arr1.forEach((element) => {
//   element.addEventListener("click", callback);
// });
