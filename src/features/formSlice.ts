import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
	text: string;
}

const initialState: FormState = {
	text: "",
};

export const formSlice = createSlice({
	name: "todoForm",
	initialState,
	reducers: {
		setFormText: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
			// console.log('state.text: ', state.text);
		},
	},
});

export const { setFormText } = formSlice.actions;
export default formSlice.reducer;
