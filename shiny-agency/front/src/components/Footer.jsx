import styled from 'styled-components'
import colors from '../utils/colors'
import { useContext } from 'react'
import { ThemeContext } from '../utils/Context/Context'

export default function Footer() {
	const {theme, toggleTheme} = useContext(ThemeContext)
	console.log(theme);
	return (
		<FooterContainer>
			<NightModeBtn onClick={toggleTheme}>Mode {theme === 'light' ? 'nuit 🌙' : 'jour ☀️'}</NightModeBtn>
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
	border: none;
	cursor: pointer;
	color: ${colors.secondary};
`
