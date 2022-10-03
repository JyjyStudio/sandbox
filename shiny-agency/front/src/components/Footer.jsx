import styled from 'styled-components'
import colors from '../utils/colors'
import EmailInput from './EmailInput'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from '../utils/redux/selectors'
import { toggleTheme } from '../features/theme'

export default function Footer() {

	const theme = useSelector(selectTheme)
	const dispatch = useDispatch()
	return (
		<FooterContainer isDarkMode={theme === 'dark'}>
			<NightModeBtn
				border="2px black solid"
				isDarkMode={theme === 'dark'}
				onClick={() => dispatch(toggleTheme())}
			>
				Mode {theme === 'light' ? 'nuit 🌙' : 'jour ☀️'}
			</NightModeBtn>
			<EmailInput isDarkMode={theme === 'dark'} />
		</FooterContainer>
	)
}

const FooterContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding-top: 40px;
	margin-top: 40px;
	border-top: 3px solid
		${({ isDarkMode }) => (isDarkMode ? '#fff' : colors.primary)};
`

const NightModeBtn = styled.button`
	background-color: transparent;
	border: ${({ border }) => border};
	cursor: pointer;
	color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : colors.secondary)};
	margin-bottom: 40px;
	padding: 10px 20px;
	border-radius: 5px;
	&:hover {
		background: lightgray;
	}
`
