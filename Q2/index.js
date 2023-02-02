const button = document.getElementById("btn");

const fetchData = async () => {
  button.style.opacity = "0.5";
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  const data = await fetch("https://jsonplaceholder.typicode.com/users/1");

  let person = await data.text();
  person = JSON.parse(person);

  name.textContent = `Name: ${person.name}`;
  email.textContent = `Email: ${person.email}`;
  phone.textContent = `Phone: ${person.phone}`;
  button.style.opacity = "1";
};
button.addEventListener("click", fetchData);
