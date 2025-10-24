import { ToDoListItem } from "./ToDoItem/ToDoListItem";
import { ToDo } from "../../models/todo-item";
import { ToDoListCompleted, ToDoListContainer, ToDoListFailed } from "./ToDoList.styled";

export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function}) => {


	const ckeckedList = () => {
		return props.todos
			.filter((item) => !item.isDone)
			.map((item) => {
				return <ToDoListItem
							toDoItem={item}
							key={item.id}
							updateToDo={props.updateToDo}
							deleteToDo={props.deleteToDo}
						/>;
			});
	}

	const unCheckedList = () => {
		return props.todos
			.filter((item) => item.isDone)
			.map((item) => {
				return (
					<ToDoListItem
						toDoItem={item}
						key={item.id}
						updateToDo={props.updateToDo}
						deleteToDo={props.deleteToDo}
					/>
				);
			});
	}

	return (

		<ToDoListContainer>
			<ToDoListFailed>
				{ ckeckedList() }
			</ToDoListFailed>
			<ToDoListCompleted>
				{unCheckedList()}
			</ToDoListCompleted>
		</ToDoListContainer>

	);
}