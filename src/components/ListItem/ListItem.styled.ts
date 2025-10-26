import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledListItemLink = styled(NavLink)<{ done: string }>`
	text-decoration: none;
	padding: 10px;
	color: ${({ done }) => (done === 'true' ? "rgb(1, 214, 1)" : "red")};
	text-decoration: ${({ done }) => (done === 'true' ? "line-through" : "none")};
`;
