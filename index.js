const shoppingListEl = document.querySelector("#shopping-list");
const addButtonEl = document.querySelector("#add-button");
const inputEl = document.querySelector("#input");
const clearButtonEl = document.querySelector("#clear-button");

// Add an item to the shopping list
addButtonEl.addEventListener("click", () => {
  const inputElValue = inputEl.value;

  const shoppingListItemEl = document.createElement("li");
  shoppingListItemEl.textContent = inputElValue;

  const markPurchasedButton = document.createElement("button");
  markPurchasedButton.id = "mark-purchased";
  markPurchasedButton.textContent = "Mark Purchased";

  shoppingListItemEl.appendChild(markPurchasedButton);

  shoppingListEl.appendChild(shoppingListItemEl);

  inputEl.value = "";
});

// Clear the shopping list
clearButtonEl.addEventListener("click", () => {
  shoppingListEl.innerHTML = "";
});

// Functionality to  mark the items as purchased
shoppingListEl.addEventListener("click", (event) => {
  if (event.target.matches("#mark-purchased")) {
    const shoppingListItemEl = event.target.parentElement;
    shoppingListItemEl.classList.add("purchased-item");
  }
});
