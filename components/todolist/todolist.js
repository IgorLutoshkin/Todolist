import { Header } from "./Heder/Heder.js";
import { TasksList } from "./TasksList/TasksList.js";
import { data, openDialog } from "../../data/data.js";
import { Dialog } from "./Dialog/Dialog.js";
import { Button } from "./Button/Button.js";

export function Todolist() {
  const container = document.createElement("div");
  container.className = "wrap";

  container.append(Header());
  container.append(TasksList(data.tasks));
  container.append(Dialog());
  container.append(Button("Add task", () => openDialog()));

  return container;
}
