import { ToDo } from "../../models/todo-item"
import { StyledListItemLink } from "./ListItem.styled";

export const ListItem = ({todo}: {todo: ToDo}) => {
	  const href = `/list/${todo.id}`;
	return (

		 <StyledListItemLink isDone={todo.isDone} to={href}>{todo.text}</StyledListItemLink>
		// <NavLink isDone={todo.isDone}
		// 	target="_blank"
		// 	rel="noreferrer"
		// 	href={`/list/${todo.id}`}
		// >{todo.text}</NavLink>
	);
}