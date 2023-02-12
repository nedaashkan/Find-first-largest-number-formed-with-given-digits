let form = document.querySelector("#search-form");
form.addEventListener("submit", searchButton);
let resultEl = document.getElementById("result-el");
let inputEl = document.getElementById("input-el");
let value = inputEl.value;
let valueArray = Array.from(value);
let arrayBiggerNumberThenFistNumber = [];
let firstBiggerNumberThenFistNumber;
let result;
function searchButton(event) {
  event.preventDefault();
  for (let i = 0; i < valueArray.length; i++) {
    if (valueArray[i] > valueArray[0]) {
      arrayBiggerNumberThenFistNumber.push(valueArray[i]);
    }
  }
  arrayBiggerNumberThenFistNumber.sort((a, b) => a - b);
  valueArray.sort((a, b) => a - b);
  firstBiggerNumberThenFistNumber = arrayBiggerNumberThenFistNumber[0];
  if (firstBiggerNumberThenFistNumber === undefined) {
    result = "it doesn't exist";
  } else {
    result = firstBiggerNumberThenFistNumber;
  }
  resultEl.textContent = result;
  arrayBiggerNumberThenFistNumber = [];
}
// sort the valueArray Array and delete the firstBiggerNumberThenFistNumber value from the sort the valueArray Array
`find this number ${firstBiggerNumberThenFistNumber} from valueArray array delete the first number you find`;
