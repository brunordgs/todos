let todos = [];

const filters = {
	searchText: '',
	hideCompleted: false,
};

// Check for existing saved data
const todosJSON = localStorage.getItem('todos');

if (todosJSON) {
	todos = JSON.parse(todosJSON);
}

// Rendering todos on screen
const renderTodos = (todos, filters) => {
	const allTodos = document.querySelector('#todos');

	let filteredTodos = todos.filter(({ title, completed }) => {
		const searchTextMatch = title
			.toLowerCase()
			.includes(filters.searchText.toLowerCase());
		const hideCompletedMatch = !filters.hideCompleted || !completed;

		return searchTextMatch && hideCompletedMatch;
	});

	// Check todos's length for summary text
	const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

	allTodos.innerHTML = '';

	const summary = document.createElement('h2');
	summary.textContent = `You have ${incompleteTodos.length} todos left`;
	allTodos.appendChild(summary);

	filteredTodos.forEach(({ title }) => {
		const todoEl = document.createElement('p');
		todoEl.textContent = title;
		allTodos.appendChild(todoEl);
	});
};

renderTodos(todos, filters);

const insertTodo = (todo) => {
	todos.push({
		title: todo,
		completed: false,
	});

	localStorage.setItem('todos', JSON.stringify(todos));
};

// Listen for todo text change to filter it
const filterTodo = document.querySelector('#filter-todo');
filterTodo.oninput = (e) => {
	filters.searchText = e.target.value;
	renderTodos(todos, filters);
};

// Listen for hide completed todos
const hideCompleted = document.querySelector('#hide-completed');
hideCompleted.onchange = (e) => {
	filters.hideCompleted = e.target.checked;
	renderTodos(todos, filters);
};

// Inserting a new todo
const newTodo = document.querySelector('#new-todo');
newTodo.onsubmit = (e) => {
	e.preventDefault();

	insertTodo(e.target.elements.text.value);
	e.target.elements.text.value = '';

	renderTodos(todos, filters);
};
