import { StyledNavLinkButton } from "./NavLinkButton.styled";

export const NavLinkButton = (props: {
	children: React.ReactNode;
	to: string;
}) => {
	return (
		<StyledNavLinkButton to={props.to}>
			{props.children}
		</StyledNavLinkButton>
	);
};
