import { Tasks } from "./Tasks/Tasks.js";

export function TasksList(tasks) {
  const container = document.createElement("ol");
  /* for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const taskElement = Tasks(task);
    container.append(taskElement);
  } */
  tasks.map((el) => container.append(Tasks(el))); //добавляем каждую li в список
  return container;
}
