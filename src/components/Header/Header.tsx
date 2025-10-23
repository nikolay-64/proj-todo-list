import { NavLink } from "react-router-dom";
import clasess from "./Header.module.scss";

export const Header = () => {

	const getActiveClass = ({ isActive }: {isActive: boolean}): string => {
		return isActive ? `${clasess.active} ${clasess.link}` : clasess.link;
	};

	return (
		<>
			<header className={clasess.header}>
				<div className={clasess.container}>
					<NavLink to="/" className={getActiveClass}>ToDo</NavLink>
					<NavLink to="/list" className={getActiveClass}>List</NavLink>
				</div>
			</header>
		</>
	);
};
