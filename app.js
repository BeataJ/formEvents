// const form = document.querySelector("#signup-form");

const creditCardInput = document.querySelector("#cc");
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
for (let input of [creditCardInput, terms, fruitsSelect]) {
  input.addEventListener("input", ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
  });
}

//
//
// creditCardInput.addEventListener("input", e => {
//   console.log(e);
//   formData["cc"] = e.target.value;
// });

// fruitsSelect.addEventListener("input", e => {
//   console.log(e);
//   formData["fruits"] = e.target.value;
// });

// terms.addEventListener("input", e => {
//   console.log(e);
//   formData["terms"] = e.target.checked;
// });
