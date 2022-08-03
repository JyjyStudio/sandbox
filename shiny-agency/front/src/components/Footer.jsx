import styled from 'styled-components'
import colors from '../utils/colors'
import { useContext } from 'react'
import { ThemeContext } from '../utils/Context/Context'

export default function Footer() {
	const {theme, toggleTheme} = useContext(ThemeContext)

	return (
		<FooterContainer>
			<NightModeBtn border="2px black solid" isDarkMode={theme === 'dark'} onClick={toggleTheme}>Mode {theme === 'light' ? 'nuit 🌙' : 'jour ☀️'}</NightModeBtn>
		</FooterContainer>
	)
}

const FooterContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding-top: 60px;
`

const NightModeBtn = styled.button`
	background-color: transparent;
	border: ${({border}) => border};
	cursor: pointer;
	color: ${({isDarkMode}) => isDarkMode ? '#fff' : colors.secondary};
	margin-bottom: 40px;
	padding: 10px 20px;
	border-radius: 5px;
	&:hover {
		background: lightgray;
	}
`
