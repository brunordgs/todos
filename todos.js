const todos = [
	{ title: 'Order cat food', completed: true },
	{ title: 'Clean kitchen', completed: false },
	{ title: 'Buy food', completed: true },
	{ title: 'Do work', completed: false },
	{ title: 'Exercise', completed: true },
];

const filterRemainingTodos = (todos) => {
	return todos.filter((todo) => {
		const isCompleted = todo.completed;

		return !isCompleted;
	});
};

const sortTodos = (todos) => {
	return todos.sort((a, b) => {
		const A = a.completed;
		const B = b.completed;

		return !A && B ? -1 : !B && A ? 1 : 0;
	});
};

const deleteTodo = (todos, title) => {
	const index = todos.findIndex((todo) => {
		return todo.title.toLowerCase() === title.toLowerCase();
	});

	if (index > -1) {
		todos.splice(index, 1);
	}
};

filterRemainingTodos(todos);
sortTodos(todos);
deleteTodo(todos, 'Buy food');
