document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
  }
});

const formBtn = document.querySelector(".form-button");
formBtn.addEventListener("click", () => {
  let user = [];
  for (let elem of form.elements) user.push(elem.value);
  console.log(user);
});
