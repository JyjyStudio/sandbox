import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import { Loader } from '../components/Loader'
import colors from '../utils/colors'
import axios from 'axios'
import { SurveyContext, ThemeContext } from '../utils/Context/Context'
import SecondHeading from '../components/SecondHeading'

const Survey = () => {
	const [questions, setquestions] = useState("")
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const { answers, saveAnswers } = useContext(SurveyContext) 
	const {theme} = useContext(ThemeContext)

	const { questionNumber } = useParams()
	const questionNumberInt = parseInt(questionNumber)
	const previousQuestion = (1 < questionNumberInt < 10) ? `/questionnaire/${questionNumberInt - 1}` : '/'
	const nextQuestion = `/questionnaire/${questionNumberInt + 1}`
	
	const navigate = useNavigate()

	const saveReply = answer =>	{

		saveAnswers({ [questionNumber]: answer })

		if(questionNumber < 6) navigate(`/questionnaire/${questionNumberInt + 1}`)
		else navigate(`/resultats`)
		
	}
	

	useEffect(() => {
		axios.get('http://localhost:8000/survey')
		.then(response => {
				const {surveyData} = response.data
				setLoading(false)
				setquestions(surveyData)
		})
		.catch (function (err) {
			console.log(err)
			setError(true)
			setErrorMessage(err)
		})
	}, [])
	
	if(questionNumberInt < 1 || questionNumberInt > 6) return <Navigate to='/questionnaire/1' replace />
	
	if(error) return (<SecondHeading $isDarkMode={theme === 'dark'} textAlign="center">Oops, une erreur est survenue.. <br/>({errorMessage.message}) </SecondHeading>) 
	else if(loading) return <Loader/>
	else return (

		<SurveyContainer>
			
			<H1>Question {questionNumberInt}</H1>
			<Question>{questions[questionNumberInt]}</Question>
			<Response>
				<Button blueHover border="2px black solid" padding="25px 100px" margin="0 25px" color="black" onClick={() => saveReply(true)} isSelected={answers[questionNumber] === true}>
					Oui
				</Button>
				<Button blueHover border="2px black solid" padding="25px 100px" margin="0 25px" color="black" onClick={() => saveReply(false)} isSelected={answers[questionNumber] === false}>
					Non
				</Button>
			</Response>
				{
					<LinksContainer>
						<StyledLinks $isDarkMode={theme === 'dark'} style={{ pointerEvents: (questionNumberInt === 1) && 'none', textDecoration: (questionNumberInt === 1) && 'none' }} to={previousQuestion}>
							Précédent
						</StyledLinks>
						{ questionNumberInt === 6 ?
							<StyledLinks $isDarkMode={theme === 'dark'} to='/resultats'>Résultats</StyledLinks>
							:
							<StyledLinks $isDarkMode={theme === 'dark'} to={nextQuestion}>Suivant</StyledLinks>
						}
					</LinksContainer>
				}

		</SurveyContainer>
	)
}

const SurveyContainer = styled.div`
	margin: 50px auto 0;
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

	color: ${ ({$isDarkMode}) => $isDarkMode ? '#fff' : colors.primary};
	&:hover {
		color: ${colors.blueBackground};
	}	
`

export default Survey
