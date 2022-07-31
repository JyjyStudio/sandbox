import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import colors from '../utils/colors'

const Survey = () => {
	const { question } = useParams()
	let questionInt = parseInt(question)
	const previousQuestion = (1 < questionInt < 10) ? `/questionnaire/${questionInt - 1}` : '/'

	const nextQuestion = `/questionnaire/${questionInt + 1}`

	if(questionInt < 1 || questionInt > 10) return <Navigate to='/questionnaire/1' replace />
	
	return (
		<SurveyContainer>

			<H1>Question {questionInt}</H1>
			<Question>Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?</Question>
			<Response>
				<Button blueHover padding="25px 100px" margin="0 25px" color="black">Oui</Button>
				<Button blueHover padding="25px 100px" margin="0 25px" color="black">Non</Button>
			</Response>
				{
					<LinksContainer>
						<StyledLinks style={{ pointerEvents: (questionInt === 1) && 'none', textDecoration: (questionInt === 1) && 'none' }} to={previousQuestion}>
							Précédent
						</StyledLinks>
						{ questionInt === 10 ?
							<StyledLinks to='/resultats'>Résultats</StyledLinks>
							:
							<StyledLinks to={nextQuestion}>Suivant</StyledLinks>
						}
					</LinksContainer>
				}

		</SurveyContainer>
	)
}

const SurveyContainer = styled.div`
	margin: 100px auto 0;
	text-align: center;
`
const H1 = styled.h1`
    font-size: 25px;
	border-bottom: 2px ${colors.blueBackground} solid;
	width: fit-content;
	margin: 0 auto;
`
const Question = styled.p`
	font-size: 20px;
	margin-top: 56px;
`
const Response = styled.div`
	margin: 80px 0;
`
const LinksContainer = styled.div`
	display: flex;
    justify-content: space-around;
    align-items: center;
`
const StyledLinks = styled(Link)`
	color: ${colors.primary};
	&:hover {
		color: #61dafb;
	}	
`

export default Survey
