import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDo } from "../models/todo-item";

export interface TodoState {
	todos: ToDo[];
}

const initialState: TodoState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todoList",
	initialState,
	reducers: {
		createAction: (state, action: PayloadAction<string>) => {
			const newToDo: ToDo = {
				id: state.todos.length,
				text: action.payload,
				isDone: false,
			};
			state.todos = [...state.todos, newToDo];
		},
		updateAction: (state, action: PayloadAction<ToDo>) => {
			if (action.payload.text.includes('не обновлять')) {
				throw new Error('задачу "не обновлять" невозможно обновить');
			}
			const newTodos = state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.isDone = !todo.isDone;
				}
				return todo;
			});
			state.todos = newTodos;
		},
		// updateAction: (state, action: PayloadAction<ToDo>) => {
		// 	// console.log('updateAction.payload: ', action.payload);
		// 	const toDoItem = action.payload;
		// 	const modTodo: ToDo | undefined = state.todos.find(
		// 		(el) => el.id === toDoItem.id
		// 	);
		// 	if (!modTodo) {
		// 		throw new Error('задачу "no-update" невозможно обновить');
		// 	} else if (toDoItem.text.includes("no-update")) {
		// 		throw new Error('задачу "no-update" невозможно обновить');
		// 	}
		// 	modTodo.isDone = !modTodo.isDone;
		// 	// ??? state.todos = [...state.todos]
		// },

		deleteAction: (state, action: PayloadAction<ToDo>) => {
			const newTodos = state.todos.filter(
				(todo) => todo.id !== action.payload.id
			);
			state.todos = newTodos;
		},
	},
});

export const { createAction, updateAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;
