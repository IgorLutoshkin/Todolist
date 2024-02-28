import { Todolist } from "./components/todolist/todolist.js";
import { data, getDataLocalStorage, subscribe } from "./data/data.js";

function refreshUI() {
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = "";
  const todoListElement = Todolist(data);
  rootElement.append(todoListElement);
}

refreshUI();
subscribe(refreshUI);
getDataLocalStorage();
