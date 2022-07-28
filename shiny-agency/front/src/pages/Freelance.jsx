import React from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowImg from '../assets/left-arrow.png'
import Button from '../components/Button'
import RectangleContainer from '../components/RectangleContainer'
import Img from '../components/Img'
import FirstHeading from '../components/FirstHeading'

const Freelance = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	const params = useParams()
	return (
		<React.StrictMode>

			<GoBackContainer>
				<Img src={ArrowImg} width="25px" alt="go back" />
				<Button padding="0 0 0 15px" backgroundColor="none" onClick={() => goBack(-1)}>
					Retour
				</Button>
			</GoBackContainer>

			<RectangleContainer>
				<Img src='' alt='profil'/>
				<FirstHeading textAlign="center">{params.name.split('-').join(' ')}</FirstHeading>
			</RectangleContainer>
			
		</React.StrictMode>
	)
}

const GoBackContainer = styled.div`
	display: flex;
	margin-left: 50px;
`

export default Freelance
