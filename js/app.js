let form = document.querySelector("#search-form");
form.addEventListener("submit", searchButton);
let resultEl = document.getElementById("result-el");
let inputEl = document.getElementById("input-el");
let arrayBiggerNumberThenFistNumber = [];
let firstBiggerNumberThenFistNumber;
let result;
function searchButton(event) {
  event.preventDefault();
  let value = inputEl.value;
  let valueArray = Array.from(value);
  for (let i = 0; i < valueArray.length; i++) {
    if (valueArray[i] > valueArray[0]) {
      arrayBiggerNumberThenFistNumber.push(valueArray[i]);
    }
  }
  arrayBiggerNumberThenFistNumber.sort((a, b) => a - b);
  valueArray.sort((a, b) => a - b);
  firstBiggerNumberThenFistNumber = arrayBiggerNumberThenFistNumber[0];
  let index = valueArray.indexOf(firstBiggerNumberThenFistNumber);
  valueArray.splice(index, 1);
  if (firstBiggerNumberThenFistNumber === undefined) {
    result = "it doesn't exist";
  } else {
    result = firstBiggerNumberThenFistNumber + `${valueArray.join("")}`;
  }
  resultEl.textContent = result;
  arrayBiggerNumberThenFistNumber = [];
}
// let array = [2,5,5,5,6,9,4,3,3,3,4,4]
// 255569433344
// let sort = array.sort((a, b) => a - b);
// let number = 3
// console.log(number);
// let index = sort.indexOf(number);
//  sort.splice(index, 1);
// let answer = number + `${sort.join("")}`
// let realAnswer = 323344455569
