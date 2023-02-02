const list = document.getElementById("list");
const deleteItem = (event) => {
  list.removeChild(event.target);
};
const addItem = () => {
  const value = document.getElementById("input").value;
  if (value === "") {
    return;
  }
  const newItem = document.createElement("li");
  newItem.textContent = value;
  newItem.addEventListener("click", deleteItem);
  document.getElementById("input").value = "";
  list.appendChild(newItem);
};
const button = document.getElementById("btn");
button.addEventListener("click", addItem);
