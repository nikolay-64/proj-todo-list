import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todoList'
import themeReducer from './features/themeList'
import formReducer from './features/formSlice'
import { loadFromLocalStorage, saveToLocalStorage } from "./helpers/storage";



export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		themeList: themeReducer,
		form: formReducer
	},
	preloadedState: loadFromLocalStorage()
});

store.subscribe(() => saveToLocalStorage(store.getState()))


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;