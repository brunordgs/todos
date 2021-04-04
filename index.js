'use strict';

const todos = getSavedTodos();

const filters = {
	searchText: '',
	hideCompleted: false,
};

renderTodos(todos, filters);

const insertTodo = (todo) => {
	todos.push({
		id: uuidv4(),
		text: todo,
		completed: false,
	});

	saveTodos(todos);
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
