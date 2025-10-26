import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { NavLinkButton } from "../components/NavLinkButton/NavLinkButton";

export const NotFound = () => {

	const theme = useSelector((state: RootState) => state.themeList.theme);


	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<div className="container">
					<h1>Not Found</h1>
					<NavLinkButton to="/">To Home</NavLinkButton>
				</div>
			</ThemeProvider>
		</>
		// <div className="container">
		// 	<h1>Not Found</h1>
		// 	<NavLink to="/">To Home</NavLink>
		// </div>
	);
}
