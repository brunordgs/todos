'use strict';

// Fetch existing todos from local storage
const getSavedTodos = () => {
	const todos = localStorage.getItem('todos');

	try {
		return todos ? JSON.parse(todos) : [];
	} catch {
		return [];
	}
};

// Save the todos to local storage
const saveTodos = (todos) => {
	return localStorage.setItem('todos', JSON.stringify(todos));
};

// Remove a todo from the list by id (uuid)
const removeTodo = (id) => {
	const index = todos.findIndex((todo) => todo.id === id);

	if (index > -1) {
		todos.splice(index, 1);
	}
};

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
	const todo = todos.find((todo) => todo.id === id);

	if (todo) {
		todo.completed = !todo.completed;
	}
};

// Generate the DOM structure for a todo
const generateTodoDOM = (todo) => {
	const todoEl = document.createElement('div');
	const todoText = document.createElement('span');
	const checkbox = document.createElement('input');
	const removeButton = document.createElement('button');

	// Setup todo checkbox
	checkbox.type = 'checkbox'; // same as setAttribute('type', 'checkbox')
	todoEl.appendChild(checkbox);
	checkbox.checked = todo.completed;
	checkbox.onchange = () => {
		toggleTodo(todo.id);
		saveTodos(todos);
		renderTodos(todos, filters);
	};

	// Setup todo text
	todoText.textContent = todo.text;
	todoEl.appendChild(todoText);

	// Setup todo remove button
	removeButton.textContent = 'x';
	todoText.appendChild(removeButton);
	removeButton.onclick = () => {
		removeTodo(todo.id);
		saveTodos(todos);
		renderTodos(todos, filters);
	};

	return todoEl;
};

// Generate the DOM structure for the summary
const generateSummaryDOM = (incompleteTodos) => {
	const summary = document.createElement('h2');
	summary.textContent = `You have ${incompleteTodos.length} todos left`;

	return summary;
};

// Render application todos
const renderTodos = (todos, filters) => {
	const todoList = document.querySelector('#todos');

	// Destructuring in this case, is not good enough to use debugger
	const filteredTodos = todos.filter((todo) => {
		const searchTextMatch = todo.text
			.toLowerCase()
			.includes(filters.searchText.toLowerCase());
		const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

		return searchTextMatch && hideCompletedMatch;
	});

	// Check todos's length for summary text
	const incompleteTodos = filteredTodos.filter(({ completed }) => !completed);

	todoList.innerHTML = '';

	const summary = generateSummaryDOM(incompleteTodos);
	todoList.appendChild(summary);

	filteredTodos.forEach((todo) => {
		const todoEl = generateTodoDOM(todo);

		todoList.appendChild(todoEl);
	});
};

const deleteTodo = (todos, text) => {
	const index = todos.findIndex((todo) => {
		return todo.text.toLowerCase() === text.toLowerCase();
	});

	if (index > -1) {
		todos.splice(index, 1);
	}
};
