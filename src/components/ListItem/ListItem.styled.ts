import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledListItemLink = styled(NavLink)<{ isDone: boolean }>`
	text-decoration: none;
	padding: 10px;
	color: ${({ isDone }) => (isDone ? "rgb(1, 214, 1)" : "red")};
	text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;

// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// export const StyledNavLink = styled(NavLink)<{ done: string }>`
// 	text-decoration: none;
// 	padding: 10px;
// 	color: ${({ done }) => (done === "true" ? "green" : "red")};
// 	text-decoration: ${({ done }) =>
// 		done === "true" ? "line-through" : "none"};
// `;