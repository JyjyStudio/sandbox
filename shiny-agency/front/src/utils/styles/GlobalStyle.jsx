import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../Context/Context";

export default function GlobalStyle() {
	const {theme} = useContext(ThemeContext)

	return <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
}

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

	body {
		background-color: ${props  => props.isDarkMode ? '#333' : '#f1f1f1'};
	}
	
    p, a, button {
		color: ${props  => props.isDarkMode ? '#f1f1f1' : '#333'}; 
    }
	
`