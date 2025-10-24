// import clasess from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { ClasessContainer, ClasessHeader, ClasessNavLink, ClasessToggleButton } from "./Header.styled";
import { toggleThemeAction } from "../../features/themeList";

export const Header = () => {

	const dispatch = useDispatch()

	// const getActiveClass = ({ isActive }: {isActive: boolean}): string => {
	// 	return isActive ? `${clasess.active} ${clasess.link}` : clasess.link;
	// };

	return (

			<ClasessHeader>
				<ClasessContainer>
					<ClasessNavLink to="/">ToDo</ClasessNavLink>
					<ClasessNavLink to="/list">List</ClasessNavLink>

					<ClasessToggleButton>
						<button onClick={() => dispatch(toggleThemeAction())}>toggle</button>
					</ClasessToggleButton>
				</ClasessContainer>
			</ClasessHeader>
	);
};
