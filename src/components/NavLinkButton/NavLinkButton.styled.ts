import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLinkButton = styled(NavLink)`
	text-decoration: none;
	background-color: none;
	color: blue;
	padding: 5px 15px;
	border-radius: 10px;

	transition: background-color 0.2s ease-in-out,
		text-decoration 0.2s ease-in-out;
	&:hover {
		text-decoration: underline black;
		text-underline-offset: 5px;
		background-color: lightblue;
		color: #fff;
	}
`;
