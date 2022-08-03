import { useContext } from 'react'
import { ThemeContext } from '../utils/Context/Context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/colors'
import Button from './Button'

const Navbar = () => {

	const {theme} = useContext(ThemeContext)

	return (
		<Nav>
			<StyledLink $isDarkMode={theme === 'dark'} to="/">
				Accueil
			</StyledLink>

			<StyledLink $isDarkMode={theme === 'dark'} to="/freelances">
				Profils
			</StyledLink>

			<StyledLink to="/questionnaire/1">
				<Button
					padding="8px 30px"
					backgroundColor={colors.blueBackground}
					color="white"
				>
					Faire le test
				</Button>
			</StyledLink>
		</Nav>
	)
}

const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-size: 18px;
	min-width: 50%;
	margin-top: 40px;
	font-weight: 500;
	margin-bottom: 50px;
`
export const StyledLink = styled(Link)`
	color: ${props => props.$isDarkMode ? 'white' : 'black'};
	text-decoration: none;

	&:hover {
		color: ${props => props.$isDarkMode ? colors.secondary : colors.blueBackground};
		text-decoration: underline;
	}
`

export default Navbar
