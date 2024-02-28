import { addElement, closeDialog, data } from "../../../data/data.js";
import { Button } from "../Button/Button.js";

export function Dialog() {
  const container = document.createElement("dialog");
  container.open = data.dialogWindow;
  //
  const titleHederInput = document.createElement("h4");
  titleHederInput.append("New task");
  //
  const inputElement = document.createElement("input");
  inputElement.placeholder = "Input your new task";

  //
  /* const ButtonSave = document.createElement("button");
  ButtonSave.append("Save");
  ButtonSave.addEventListener("click", () => );
 */
  //
  //
  container.append(
    titleHederInput,
    inputElement,
    Button("Save", () => addElement(inputElement)),
    Button("Cancel", () => closeDialog())
  );

document.addEventListener('click', ()=> {

})

  document.body.append(container);

  return container;
}
