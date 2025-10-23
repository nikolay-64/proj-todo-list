import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Helmet, HelmetProvider } from "react-helmet-async";


export const Layout = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Главная - ToDoList</title>
			</Helmet>
			<Header />
			<Outlet />
		</HelmetProvider>
	);
}