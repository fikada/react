const containerElement = document.querySelector("#formjs");
const listOfItems = ["fikadu", "tegegn"];
const ulElement = document.createElement("ul");
listOfItems.forEach((item) => {
  const listElement = document.createElement("li");
  listElement.innerText = item;
  ulElement.appendChild(listElement);
});
containerElement.appendChild(ulElement);
