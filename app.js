const form = document.querySelector("#signup-form");

form.addEventListener("submit", function(e) {
  alert("Hello");
  console.log(e);
  e.preventDefault();
});
