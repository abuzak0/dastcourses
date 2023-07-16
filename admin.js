fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const tBody = document.querySelector(".usersTable tbody");

    data.forEach((user) => {
      const row = document.createElement("tr");

      row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.address.street}</td>`;
      tBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Ошибка при получении данных:", error);
  });
