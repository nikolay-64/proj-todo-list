import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { Bounce, ToastContainer, toast } from "react-toastify";

export const ToDoListPage = () => {
	const notifyDefault = (s: string) => toast.success(s);
	const notifyWarningTodo = (s: string) =>
		toast.warning(s, {
			position: "bottom-right",
			autoClose: 15000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		});
	const notifyCreateToDo = (s: string) =>
		toast.success(s, {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		});
	const notifyUpdateTodo = (s: string) =>
		toast.warning(s, {
			position: "bottom-right",
			autoClose: 15000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		});
	const notifyDeleteTodo = (s: string) =>
		toast.error(s, {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		});
	const [todos, setTodos] = useState<ToDo[]>([
		{
			id: 0,
			text: "Первая задача(изменить нельзя)",
			isDone: false,
		},
	]);

	const createNewToDo = (text: string) => {
		const newToDoId =
			todos.reduce((maxId: number, el: ToDo) => {
				if (maxId > el.id) {
					return maxId;
				} else {
					return el.id;
				}
			}, 0) + 1;

		const newToDo: ToDo = {
			id: newToDoId,
			text: text,
			isDone: false,
		};
		setTodos([...todos, newToDo]);

		notifyCreateToDo("Задача добавлена!");
	};
  const updateToDo = (toDoItem: ToDo) => {
		const newTodo: ToDo | undefined = todos.find(
			(el) => el.id === toDoItem.id
		);
		if (!newTodo || toDoItem.id === 0) {
			notifyUpdateTodo(
				`Задача: "${toDoItem.text}" id:"${toDoItem.id}"  не найдена!`
			);
			return;
		}
		newTodo.isDone = !newTodo.isDone;
		setTodos([...todos]);
		if(newTodo.isDone) {
			notifyDefault(
				`Задача: "${newTodo.text}" ВЫПОЛНЕНА!`
			);
		} else {
			notifyWarningTodo(
				`Задача: "${newTodo.text}" НЕ ВЫПОЛНЕНА`
			)
		}
  };

	const deleteToDo = (toDoItem: ToDo) => {
		const newTodos = todos.filter((todo) => todo.id !== toDoItem.id);
		setTodos(newTodos);
		notifyDeleteTodo("Задача удалена!");
	};
	return (
		<>
			<Header />

			<Form createNewToDo={createNewToDo} />

			<ToDoList
				todos={todos}
				updateToDo={updateToDo}
				deleteToDo={deleteToDo}
			/>

			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				transition={Bounce}
			/>
		</>
	);
};
