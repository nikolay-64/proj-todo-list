import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListItem } from "./pages/ViewListItem";
import { ViewList } from "./pages/ViewList";
import { ghRoot, isDev } from "./const";

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Layout />,
			errorElement: <NotFound />,
			children: [
				{ path: "/", element: <ToDoListPage /> },

				{ path: "/list", element: <ViewList /> },

				{ path: "/list/:id", element: <ViewListItem /> },
			],
		},
		{
			path: "/404",
			element: <NotFound />,
		},
		{
			path: "*",
			element: <NotFound />,
		},
	],
	{ basename: `${isDev ? "" : ghRoot}` }
);
