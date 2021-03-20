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
};

// Rendering todos on screen
const renderTodos = (todos, filters) => {
	const allTodos = document.querySelector('#todos');

	const filteredTodos = todos.filter(({ title }) => {
		return title.toLowerCase().includes(filters.searchText.toLowerCase());
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

const insertTodo = document.querySelector('#insert-todo');
const addTodo = document.querySelector('#add-todo');
const filterTodo = document.querySelector('#filter-todo');

// Listen for todo text change
insertTodo.oninput = (e) => console.log(e.target.value);

// Listen for add a todo to the list
addTodo.onclick = () => console.log('Add a new todo...');

// Listen for todo text change to filter it
filterTodo.oninput = (e) => {
	filters.searchText = e.target.value;
	renderTodos(todos, filters);
};
