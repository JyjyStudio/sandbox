import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

const Survey = () => {
	const { question } = useParams()
	let questionInt = parseInt(question)
	const previousQuestion = (1 < questionInt < 10) ? `/questionnaire/${questionInt - 1}` : '/'

	const nextQuestion = `/questionnaire/${questionInt + 1}`

	return (
		<React.StrictMode>
			<h1>Question {questionInt}</h1>
				{
					<div className="survey-links">
						<Link className="survey-links" style={{ pointerEvents: questionInt === 1 && 'none' }} to={previousQuestion}>
							Précédent
						</Link>
						{ questionInt === 10 ?
							<Link className="survey-links" to='/resultats'>Résultats</Link>
							:
							<Link className="survey-links" to={nextQuestion}>Suivant</Link>
						}
					</div>
				}

				{(questionInt < 1 || questionInt > 10) && <Navigate to='/questionnaire/1' /> }
		</React.StrictMode>
	)
}

export default Survey
