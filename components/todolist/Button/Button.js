/* import { openButton } from "../../../data/data.js";

export function ButtonsPanel() {
  const container = document.createElement("div");
  const btnElement = document.createElement("button");
  btnElement.append("+ add");

  btnElement.addEventListener("click", () => openButton());

  container.append(btnElement);
  return container;
}
 */

export function Button(title, func) {
  const btnElement = document.createElement("button");

  btnElement.append(title); // add title

  btnElement.addEventListener("click", () => func()); // add function callback

  return btnElement;
}
