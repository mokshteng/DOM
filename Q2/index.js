const button = document.getElementById("btn");

const fetchData = async () => {
  button.style.opacity = "0.5";
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  const id=Math.floor(Math.random() * 10) + 1;
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  let person = await data.text();
  person = await JSON.parse(person);

  name.textContent = `Name: ${person.name}`;
  email.textContent = `Email: ${person.email}`;
  phone.textContent = `Phone: ${person.phone}`;
  button.style.opacity = "1";
  document.getElementsByTagName("body")[0].append(JSON.stringify(person))
};
button.addEventListener("click", fetchData);
