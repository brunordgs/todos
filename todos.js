const todos = [
	{ title: 'Order cat food', completed: true },
	{ title: 'Clean the kitchen', completed: false },
	{ title: 'Buy food', completed: true },
	{ title: 'Do work', completed: false },
	{ title: 'Exercise', completed: true },
	{ title: 'Walk the dog', completed: true },
];

const filters = {
	searchText: '',
	hideCompleted: false,
};

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
