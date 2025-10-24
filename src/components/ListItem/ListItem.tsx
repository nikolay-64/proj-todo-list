import { ToDo } from "../../models/todo-item"
import { StyledListItemLink } from "./ListItem.styled";

export const ListItem = ({todo}: {todo: ToDo}) => {
	return (
		<StyledListItemLink isDone={todo.isDone}
			target="_blank"
			rel="noreferrer"
			href={`/list/${todo.id}`}
		>{todo.text}</StyledListItemLink>
	);
}