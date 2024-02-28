import { deleteElement } from "../../../../data/data.js";
import { Button } from "../../Button/Button.js";
import { TaskEdit } from "../TaskEdit/TaskEdit.js";

export function Tasks(task) {
  // add item
  const container = document.createElement("li");

  //
  const textTask = document.createElement("span");
  textTask.append(task.titleTask);
  container.append(textTask);

  //
  container.append(Button("x", () => deleteElement(task.id)));

  //создание input ,с текстом задачи, вместо span для редактирования
  container.addEventListener("click", () =>
    TaskEdit(task.titleTask, container)
  );

  /*  //start

  const editInput = document.createElement("input");
  editInput.setAttribute("type", "text");
  container.addEventListener("click", () => {
    container.innerText = "";
    editInput.value = task.titleTask;
    container.append(editInput);
    editInput.focus();

    //
    //
    container.append(
      Button("edit", () => {
        let valueInput = editInput.value;
        // console.log(valueInput);

        editTask(task.titleTask, valueInput);
      })
    );
  }); */

  return container;
}
