// import { Component } from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import EmptyIllustration from '../assets/empty.svg'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 5%;
	padding: 30px;
	background-color: ${({ isDarkMode }) =>
		isDarkMode ? colors.backgroundDark : colors.backgroundLight};
`

const Title = styled.h1`
	color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
`

const SubTitle = styled.h3`
	color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
	font-weight: normal;
`

const Illustration = styled.img`
	margin: 30px 0;
`

const EmptyList = ({ isDarkMode }) => (
	<Container isDarkMode={isDarkMode}>
		<Title isDarkMode={isDarkMode}>Dommage...</Title>
		<Illustration src={EmptyIllustration} />{' '}
		<SubTitle isDarkMode={isDarkMode}>
			Il semblerait que vous n’ayez besoin d’aucune compétence{' '}
		</SubTitle>{' '}
	</Container>
)

// class EmptyList extends Component {
//   render() {
//     const { theme } = this.props
//     return (
//       <Container theme={theme}>
//         <Title theme={theme}>Dommage...</Title>
//         <Illustration src={EmptyIllustration} />
//         <SubTitle theme={theme}>
//           Il semblerait que vous n’ayez besoin d’aucune compétence
//         </SubTitle>
//       </Container>
//     )
//   }
// }

export default EmptyList
