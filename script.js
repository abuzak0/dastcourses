const { form } = document.forms;

const isRadio = (type) => ["checkbox", "radio"].includes(type);

function getFormValue(event) {
  event.preventDefault();

  const { elements } = form;
  const values = {};

  for (let i = 0; i < elements.length; i++) {
    const fromElement = elements[i];
    const { name } = fromElement;

    if (name) {
      const { value, type, checked } = fromElement;

      values[name] = isRadio(type) ? checked : value;
    }
  }

  console.log(values);
}

form.addEventListener("submit", getFormValue);

/*
let user = [];
  for (let elem of form.elements) user.push(elem.value);
  console.log(user);*/

/*const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
  }
});





const formBtn = document.querySelector(".form-button");
formBtn.addEventListener("click", () => {}); */
