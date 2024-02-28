import { editTask } from "../../../../data/data.js";
import { Button } from "../../Button/Button.js";

export function TaskEdit(titleTask, wrapItem) {
  //создание input
  const editInput = document.createElement("input");
  editInput.setAttribute("type", "text");
  wrapItem.innerText = "";
  editInput.value = titleTask;
  wrapItem.append(editInput);
  editInput.focus(); // для того, чтобы можно было вводить изменения

  // и кнопки для ввода отредактированного текста
  wrapItem.append(
    Button("Edit", () => {
      let valueInput = editInput.value;
      editTask(titleTask, valueInput);
    })
  );
  return editInput;
}
