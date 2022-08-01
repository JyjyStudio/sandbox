import React from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import ArrowImg from '../assets/left-arrow.png'
import Button from '../components/Button'
import RectangleContainer from '../components/RectangleContainer'
import Img from '../components/Img'
import FirstHeading from '../components/FirstHeading'
import SecondHeading from '../components/SecondHeading'
import colors from '../utils/colors'

const Freelance = () => {

	const navigate = useNavigate()
	const goBack = () => navigate(-1)

	const location = useLocation()
  	const freelance  = location.state
  	console.log('freelance:', freelance)

	return (
		<React.StrictMode>

			<GoBackContainer>
				<Img src={ArrowImg} width="25px" alt="go back" />
				<Button padding="0 0 0 15px" backgroundColor="none" onClick={() => goBack(-1)}>
					Retour
				</Button>
			</GoBackContainer>

			<RectangleContainer justifyContent="center">
				<Img src={freelance.picture} alt='profil' width={150} borderRadius="50%" />

				<Infos>
					<FirstHeading margin="1em 0 0 0">{freelance.name}</FirstHeading>

					<SecondHeading margin="1em 0">{freelance.job}</SecondHeading>

					<ButtonsContainer>
						{ freelance.skills.map(skill => <Button key={skill} backgroundColor="none" border="1px black solid" padding="10px" borderRadius="15px" margin="0 15px 25px 0" hoverBackground="#cecece">{skill}</Button>) }
					</ButtonsContainer>

					<div>{freelance.available ? '🟢 Disponible maintenant' : '🔴 Non disponible actuellement'}</div>

					<SecondHeading>{freelance.tjm}€/jour</SecondHeading>
				</Infos>

				<Location>{freelance.location}</Location>
			</RectangleContainer>
			
		</React.StrictMode>
	)
}

const GoBackContainer = styled.div`
	display: flex;
	margin: 0 0 50px 50px
`
const Infos = styled.div`
	margin: 20px 70px 50px 150px;
`
const ButtonsContainer = styled.div`

`
const Location = styled.div`
	color: ${colors.secondary};
    margin: 2.8em 0 0 0;
    align-self: start;
    font-size: 1.3em;
    font-weight: 500;
`
export default Freelance
