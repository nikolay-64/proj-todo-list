import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../features/todoList";

export const ToDoListPage = () => {
	const notifyDefault = (s: string) => toast.success(s);
	const notifyError = (s: string) => toast.error(s);
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

	const todoList = useSelector((state: RootState) => state.todoList.todos);
	const dispatch = useDispatch();

	const createNewToDo = (text: string) => {
		dispatch(createAction(text));
		notifyCreateToDo('Задача добавлена');
	};
	const updateToDo = (toDoItem: ToDo) => {
		try {
			dispatch(updateAction(toDoItem));
			const newIsDone = !toDoItem.isDone;
			if (newIsDone) {
				notifyDefault(`Задача: "${toDoItem.text}" ВЫПОЛНЕНА!`);
			} else {
				notifyWarningTodo(`Задача: "${toDoItem.text}" НЕ ВЫПОЛНЕНА`);
			}
		} catch (error: any) {
			notifyError(error.message);
		}
	};

	const deleteToDo = (toDoItem: ToDo) => {
		dispatch(deleteAction(toDoItem));
		notifyDeleteTodo("Задача удалена!");
	};
	return (
		<>
			<Helmet>
				<title>Список - ToDoList</title>
			</Helmet>

			<Form createNewToDo={createNewToDo} />

			<ToDoList
				todos={todoList}
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
