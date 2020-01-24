// const form = document.querySelector("#signup-form");

const creditCard = document.querySelector("#cc");
const terms = document.querySelector("#terms");
const fruitsSelect = document.querySelector("#fruits");

// form.addEventListener("submit", function(e) {
//   alert("Hello");
//   console.log("cc :", creditCard.value);
//   console.log("termc :", terms.checked);
//   console.log("fruits :", fruitsSelect.value);
//   e.preventDefault();
// });

const formData = {};
creditCard.addEventListener("input", e => {
  console.log(e);
  formData["cc"] = e.target.value;
});

fruitsSelect.addEventListener("input", e => {
  console.log(e);
  formData["fruits"] = e.target.value;
});
