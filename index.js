const shoppingListElement = document.querySelector("#shopping-list");
const addButtonElement = document.querySelector("#add-button");
const inputElement = document.querySelector("#input");
const clearButtonElement = document.querySelector("#clear-button");

// Add item 
addButtonElement.addEventListener("click", () => {
  const inputElementValue = inputElement.value;

  const shoppingListItemElement = document.createElement("li");
  shoppingListItemElement.textContent = inputElementValue;

  const markPurchasedButton = document.createElement("button");
  markPurchasedButton.id = "mark-purchased";
  markPurchasedButton.textContent = "Mark Purchased";

  shoppingListItemElement.appendChild(markPurchasedButton);

  shoppingListElement.appendChild(shoppingListItemElement);

  inputElement.value = "";
});

// Clear list
clearButtonElement.addEventListener("click", () => {
  shoppingListElement.innerHTML = "";
});

// mark the items 
shoppingListElement.addEventListener("click", (event) => {
  if (event.target.matches("#mark-purchased")) {
    const shoppingListItemElement = event.target.parentElement;
    shoppingListItemElement.classList.add("purchased-item");
  }
});
