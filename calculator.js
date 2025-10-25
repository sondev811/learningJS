const buttons = document.getElementsByTagName("button");
const showProcessing = document.getElementById("showProcessing");
// const input = document.getElementById("input");
// input.addEventListener("input", (event) => {
//   console.log(event);
// })
const arr1 = [...buttons];

let calc = "";
let operation = "";
let numbers = [];
const operators = ["+", "-", "*", "/", "="];
                    // [1, 2]  +
const calculator = (numbers, operator) => {
  if (operator === "+")
    return numbers.reduce((total, item) => (total += item), 0);
  if (operator === "-") return numbers[0] - numbers[1];
  if (operator === "*")
    return numbers.reduce((total, item) => (total *= item), 1);
  if (operator === "/") {
    if (numbers[1] === 0) {
      showProcessing.innerHTML = "Can not devide zero";
      return;
    }
    return numbers[0] / numbers[1];
  }
  return 0;
};
                  // "1 + 2"   "="
const invalidate = (current, next) => {
  // !current có nghĩa là current có giá trị là 0 hoặc "" hoặc null hoặc undefined
  // current có nghĩa là current có giá trị khác 0 và khác "" và null và undefined
  // || là chỉ cần 1 trong 2 vế là true thì nó là true
  // && là cả 2 vế đều phải là true
  // 2 * (3 + 4)
  // 2 * 3 + 2 * 4
       //false                false                 => false
  if (!current && (next === "*" || next === "/")) {
    return true;
  }
  // if ((!current && next === "*") || (!current && next === "/")) {
  // }
         // 1
  const lastValue = current[current.length - 1];
          // true                              false =>            false
  return operators.includes(lastValue) && operators.includes(next);
};
                              //  [1, 2]     +
const calculatorAndShowResult = (numbers, operator) => {
    const result = calculator(numbers, operator);
    numbers = [];
    operation = "";
    numbers = [result];
    calc = result;
    showProcessing.innerHTML = result;
};
                            // =
const processingOperator = (operator) => {
  if (operator === "ac") {
    operation = "";
    numbers = [];
    showProcessing.innerHTML = "0";
    calc = "";
    return;
  }
  if (operator === "=") {
    calculatorAndShowResult(numbers, operation);
    return;
  }
  operation = operator;
};
                          // =
const callback = function (value) {
            // "1 + 2"   =
  if (invalidate(calc, value)) {
    return;
  }

  if (isNaN(value) && calc.length === 3 && isNaN(calc)) {
    calculatorAndShowResult(numbers, operation);
    return;
  }
  
  calc += value;
  showProcessing.innerHTML = calc;
  
  if (isNaN(value)) { // không phải là số
    // không phải là số mà là các phép tính
    processingOperator(value);
    return;
  }
  // các số
  // [1, 2]
  numbers.push(Number(value));
};

arr1.forEach((element) => {
  element.addEventListener("click", (event) => {
                              // lấy giá trị attribute tên là alt của đối tượng
    const value = event.target.getAttribute("alt");
    callback(value);
  });
});
          // tham số
// const a = (number) => {

// }

// // đối số
// a("1")

// arr1.forEach((element) => {
//   element.addEventListener("click", function () {
//     const value = this.getAttribute("alt");
//     callback(value);
//   });
// });

document.addEventListener("keydown", (event) => {
  if (!isNaN(event.key) || operators.includes(event.key)) {
    callback(event.key);
  }
});
