export let data = {
  id: crypto.randomUUID(),
  title: "Todolist",
  tasks: [
    /*  {
      id: crypto.randomUUID(),
      titleTask: "Learn HTML",
    },
    {
      id: crypto.randomUUID(),
      titleTask: "Learn CSS",
    },
    {
      id: crypto.randomUUID(),
      titleTask: "Learn JS",
    },
    {
      id: crypto.randomUUID(),
      titleTask: "Learn React",
    }, */
  ],
  dialogWindow: false,
};

let notifySubscribe = null; // эту переменную будем переопределять колбэком subscriber
//которая будет вызыватся в deleteElement

export function subscribe(subscriber) {
  notifySubscribe = subscriber;

  // subscribe будем вызывать в файле отрисовки нашего UI интерфейса
  // и передавать в нее в качестве параметра refreshUI
}

//CRUD
/* удаление */
export function deleteElement(taskId) {
  let tasks = data.tasks;
  data.tasks = tasks.filter((t) => t.id !== taskId);
  notifySubscribe();
  setDataLocalStorage(); //===========================================

  //функция которая собственно меняет данные и хранит в себе данные
  //а с помощью вызова notifySubscribe внутри , мы можем дальше прокинуть и алгоритм отрисовки и сами ДАННЫЕ
  // по клику на кнопку мы ловим айдишник и выполняем deleteElement
  // далее в функции subscribe , которую передам в index, notifySubscribe присвою в качестве параметра функции
  // другую функцию (refreshUI) котораю будет перезатирать div каждый раз когда поменяются данные
}

/* добавление */

export function addElement(textInput) {
  //создать на основе инпута объект
  let taskElement = {
    id: crypto.randomUUID(),
    titleTask: textInput.value,
  };
  if (textInput.value === "") {
    alert("Введи задачу, самурай, или жмякни CANCEL для отмены");
  } else {
    // запушить его в массив данных
    data.tasks.push(taskElement);
    textInput.value = "";
  }

  notifySubscribe();
  setDataLocalStorage(); //===========================================
}

/* редактирование */
// создает новый объект массива с отредактированной задачей и обновляет UI
export function editTask(oldText, newText) {
  let tasks = data.tasks;
  data.tasks = tasks.map((el) =>
    el.titleTask === oldText ? { ...el, titleTask: newText } : el
  );

  notifySubscribe();
  setDataLocalStorage(); //===========================================
}

/*  */
// открытие диалогового окна по нажатию кнопки +добавить
export function closeDialog() {
  data.dialogWindow = false;
  notifySubscribe();
  setDataLocalStorage(); //===========================================
}
//закрытие диалогового окна по нажатию кнопки "закрыть"
export function openDialog() {
  data.dialogWindow = true;
  notifySubscribe();
}
//функция для записи введенных задач в  localStorage
function setDataLocalStorage() {
  localStorage.setItem("tasksData", JSON.stringify(data));
}

//функция для извлечения введенных задач в localStorage и отображения в UI
export function getDataLocalStorage() {
  const savedData = localStorage.getItem("tasksData");

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    data = parsedData; // Перезаписываем значение data
    // !пришлось у data поменять объявление с const на let  пока не решил!

    notifySubscribe(); // Перерисовать UI с загруженными данными
  }
}
