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

const deleteTodo = (todos, title) => {
	const index = todos.findIndex((todo) => {
		return todo.title.toLowerCase() === title.toLowerCase();
	});

	if (index > -1) {
		todos.splice(index, 1);
	}
};

filterTodos(todos);
deleteTodo(todos, 'Buy food');
