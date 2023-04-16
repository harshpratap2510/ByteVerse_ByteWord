const addForm = document.querySelectorAll(".addForm");
addForm.forEach(form => form.addEventListener("submit", (e) => {
  e.preventDefault();
})
);

const log = document.querySelector(".login-btn");
log.addEventListener("click", () => {
  addForm[0].classList.add("active");
  addForm[1].classList.remove("active");
});

const sign = document.querySelector(".signUp-btn");
sign.addEventListener("click", () => {
  addForm[1].classList.add("active");
  addForm[0].classList.remove("active");
});

