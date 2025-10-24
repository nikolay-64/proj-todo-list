// import clasess from "./Header.module.scss";
import { ClasessContainer, ClasessHeader, ClasessNavLink } from "./Header.styled";

export const Header = () => {

	// const getActiveClass = ({ isActive }: {isActive: boolean}): string => {
	// 	return isActive ? `${clasess.active} ${clasess.link}` : clasess.link;
	// };

	return (

			<ClasessHeader>
				<ClasessContainer>
					<ClasessNavLink to="/">ToDo</ClasessNavLink>
					<ClasessNavLink to="/list">List</ClasessNavLink>
				</ClasessContainer>
			</ClasessHeader>
	);
};
