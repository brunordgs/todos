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
