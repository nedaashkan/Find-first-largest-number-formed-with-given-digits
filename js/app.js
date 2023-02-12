let form = document.querySelector("#search-form");
form.addEventListener("submit", searchButton);
function searchButton(event) {
  event.preventDefault();
  console.log("hi")
}
