import { ToDo } from "../../models/todo-item"
import { StyledListItemLink } from "./ListItem.styled";

export const ListItem = ({todo}: {todo: ToDo}) => {
	  const href = `/list/${todo.id}`;
	return (
		<StyledListItemLink done={todo.isDone ? "true" : "false"} to={href}>
			"{todo.text}"
		</StyledListItemLink>
	);
}