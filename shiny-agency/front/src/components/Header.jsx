import styled from 'styled-components'
import Navbar from './Navbar'
import Img from './Img'
import DarkLogo from '../assets/dark-logo.png'
import LightLogo from '../assets/light-logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTheme } from '../utils/redux/selectors'

const Header = () => {
	const theme = useSelector(selectTheme)
	return (
		<HeaderContainer>
			<Link to="/">
				<Img
					src={theme === 'light' ? DarkLogo : LightLogo}
					width="190px"
					height="70px"
					margin="30px"
					alt="logo"
				/>
			</Link>
			<Navbar />
		</HeaderContainer>
	)
}

const HeaderContainer = styled.header`
	display: flex;
	align-item: center;
	justify-content: space-between;
	font-size: calc(10px + 2vmin);
	@media screen and (max-width: 700px){
		flex-direction column;
	}
`

export default Header
