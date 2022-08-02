import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import { Loader } from '../components/Loader'
import colors from '../utils/colors'
import axios from 'axios'

const Survey = () => {
	const [questions, setquestions] = useState("")
	const [loading, setLoading] = useState(true)

	const { questionNumber } = useParams()
	const questionNumberInt = parseInt(questionNumber)
	const previousQuestion = (1 < questionNumberInt < 10) ? `/questionnaire/${questionNumberInt - 1}` : '/'
	
	useEffect(() => {
		try {
			axios.get('http://localhost:8000/survey')
			.then(response => {
					const {surveyData} = response.data
					setLoading(false)
					setquestions(surveyData)
			})
		}
		catch (err) {
			console.log(err)
		}
	}, [])
	
	const nextQuestion = `/questionnaire/${questionNumberInt + 1}`
	if(questionNumberInt < 1 || questionNumberInt > 10) return <Navigate to='/questionnaire/1' replace />
	
	if(loading) return <Loader/>
	else return (
		<SurveyContainer>
			
			<H1>Question {questionNumberInt}</H1>
			<Question>{questions[questionNumberInt]}</Question>
			<Response>
				<Button blueHover padding="25px 100px" margin="0 25px" color="black">Oui</Button>
				<Button blueHover padding="25px 100px" margin="0 25px" color="black">Non</Button>
			</Response>
				{
					<LinksContainer>
						<StyledLinks style={{ pointerEvents: (questionNumberInt === 1) && 'none', textDecoration: (questionNumberInt === 1) && 'none' }} to={previousQuestion}>
							Précédent
						</StyledLinks>
						{ questionNumberInt === 10 ?
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
