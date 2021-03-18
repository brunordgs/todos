const todos = [
	{ title: 'Order cat food', completed: true },
	{ title: 'Clean kitchen', completed: false },
	{ title: 'Buy food', completed: true },
	{ title: 'Do work', completed: false },
	{ title: 'Exercise', completed: true },
];

const deleteTodo = (todos, title) => {
	const index = todos.findIndex((todo) => {
		return todo.title.toLowerCase() === title.toLowerCase(); 
	});

	if (index > -1) {
		todos.splice(index, 1);
	}
}

deleteTodo(todos, 'Do wosrk');