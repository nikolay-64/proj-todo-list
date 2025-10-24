import styled from "styled-components";

export const StyledListItemLink = styled.a<{ isDone: boolean }>`
	text-decoration: none;
	padding: 10px;
	color: ${({ isDone }) => (isDone ? "rgb(1, 214, 1)" : "red")};
	text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;