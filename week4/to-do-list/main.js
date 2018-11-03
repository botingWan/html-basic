document.addEventListener("DOMContentLoaded", onWindowLoadedHandler);

function onWindowLoadedHandler() {
  let currentTodos = [];
  const todoListDOM = document.querySelector(".to-do__content__list");
  const savedTodo = localStorage.getItem("savedTodo");

  if (savedTodo) {
		try {
			currentTodos = JSON.parse(savedTodo);
		} catch (err) {
			localStorage.removeItem('savedTodo');
		}
    currentTodos.forEach(todo => {
			const item = document.createElement("li");
			item.setAttribute('class', 'to-do__conetent__list__item');
      const content = document.createTextNode(todo);
      item.appendChild(content);
      todoListDOM.appendChild(item);
    });
  }

  const todoFormDOM = document.querySelector(".to-do__form");
  const todoTitleInput = document.querySelector(
    ".to-do__form .to-do__form__field input[name=title]"
  );

  todoFormDOM.addEventListener("submit", function(e) {
    e.preventDefault();
    const todoTitle = todoTitleInput.value;
    currentTodos.push(todoTitle);
    const item = document.createElement("li");
    const content = document.createTextNode(todoTitle);
    item.appendChild(content);
		todoListDOM.appendChild(item);
		const stringifiedTodos = JSON.stringify(currentTodos)
		localStorage.setItem("savedTodo", stringifiedTodos);
		todoTitleInput.value = "";
  });
}
