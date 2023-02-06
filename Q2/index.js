const button = document.getElementById("btn");
const card=document.getElementById("container")
const fetchData = async () => {
  
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  const id = Math.floor(Math.random() * 10) + 1;
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  let person = await data.text();
  person = await JSON.parse(person);

  name.textContent = `Name: ${person.name}`;
  email.textContent = `Email: ${person.email}`;
  phone.textContent = `Phone: ${person.phone}`;
  document.getElementById("info").textContent = JSON.stringify(person);
};
const changeColor = (event) =>{
  button.style.backgroundColor='red';
  event.stopPropagation();
}
button.addEventListener("click",changeColor,false)
card.addEventListener("click", fetchData);
