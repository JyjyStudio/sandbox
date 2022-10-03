import { createGlobalStyle } from 'styled-components'
import { useSelector } from 'react-redux'
import { selectTheme } from '../redux/selectors'

export default function GlobalStyle() {
	
	const theme = useSelector(selectTheme)

	return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

	body {
		background-color: ${(props) => (props.isDarkMode ? '#333' : '#f1f1f1')};
	}
	
    p, a, button, h1 {
		color: ${(props) => (props.isDarkMode ? '#f1f1f1' : '#333')}; 
    }

	a:hover{
		color: ${(props) => (props.isDarkMode ? 'white' : 'blue')}
	}
`
