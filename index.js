// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://playground-307c3-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

// selecting elements
const inputField = document.querySelector("#input-field");
const addButton = document.querySelector("#add-button");
const shoppingList = document.querySelector("ul");

addButton.addEventListener("click", () => {
  let inputValue = inputField.value;

  if (!inputValue || inputValue === " ") {
    clearInputField();
  } else {
    push(shoppingListInDB, inputValue);
  }

  clearInputField();
});

onValue(shoppingListInDB, function (snapshot) {
  if (snapshot.exists()) {
    const itemsArray = Object.entries(snapshot.val());

    clearShoppingList();

    itemsArray.forEach((item) => {
      let currentItem = item;
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1];

      appendItemToShoppingList(currentItem);
    });
  } else {
    shoppingList.innerHTML = "Add an item to see it displayed here.";
  }
});

function clearInputField() {
  inputField.value = "";
}

function clearShoppingList() {
  shoppingList.innerHTML = "";
}

function appendItemToShoppingList(item) {
  let itemID = item[0];
  let itemValue = item[1];

  let newEl = document.createElement("li");

  newEl.textContent = itemValue;

  newEl.addEventListener("click", function () {
    let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);

    remove(exactLocationOfItemInDB);
  });

  shoppingList.insertAdjacentElement("beforeend", newEl);
}
