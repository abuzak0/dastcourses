const { form } = document.forms;

const isRadio = (type) => ["radio"].includes(type);

const url = "https://jsonplaceholder.typicode.com/users";

function getFormValue(event) {
  event.preventDefault();

  /*Получаем данные со страницы в виде объекта*/
  const { elements } = form;
  const values = {};

  for (let i = 0; i < elements.length; i++) {
    const { name } = elements[i];

    if (name) {
      const { value, type, checked } = elements[i];

      values[name] = isRadio(type) ? checked : value;
    }
  }
  if (values.gender == true) {
    values.gender = "female";
  } else if (values.gender == false) values.gender = "male";

  /*Делаем ветч запрос */
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

form.addEventListener("submit", getFormValue);

const valuesFromForm = () => {};

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
});*/
