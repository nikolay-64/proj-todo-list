import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import { Theme } from "../models/theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`

${normalize}

* {
    box-sizing: border-box;
}

div > h1 {
	margin: 0;
	margin-button: 15px;
}

body {
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
    padding: 50px 0 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.429;
    color: black;
	transition: background-color .2s ease-in-out;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
}

.Toastify__toast-theme--colored.Toastify__toast--error {
	background-color: red;
	color: #fff;

}

`;
