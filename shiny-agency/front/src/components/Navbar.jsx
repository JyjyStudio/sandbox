import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../utils/colors"
import Button from "./Button"

const Navbar = () => (
	<Nav>
		<StyledLink to="/">Accueil</StyledLink>

		<StyledLink to="/freelances">Profils</StyledLink>

		<StyledLink to="/questionnaire/1">
			<Button padding="8px 30px" backgroundColor={colors.blueBackground} color="white">Faire le test</Button>
		</StyledLink>
	</Nav>
)

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
const StyledLink = styled(Link)`
	color: ${colors.secondary};
	text-decoration: none;

	&:hover {
		color: ${colors.primary};
		text-decoration: underline;
	}
`

export default Navbar