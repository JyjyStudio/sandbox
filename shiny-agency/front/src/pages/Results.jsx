import { useContext } from 'react'
import { SurveyContext } from '../utils/Context/Context'
import styled from 'styled-components'
import colors from '../utils/colors'
import { useFetch, useTheme } from '../utils/Hooks/index'
import { Loader } from '../components/Loader'
import { StyledLink } from '../components/Navbar'
import Button from '../components/Button'

export default function Results() {
	const { theme } = useTheme()
	const { answers } = useContext(SurveyContext)
	const fetchParams = formatFetchParams(answers)

	const { data, isLoading, error } = useFetch(
		`http://localhost:8000/results?${fetchParams}`
	)

	if (error) {
		return <span>Oops, une erreur est survenue... {error.message}</span>
	}

	const resultsData = data?.resultsData

	return isLoading ? (
		<LoaderWrapper>
			<Loader data-testid="loader" />
		</LoaderWrapper>
	) : (
		<ResultsContainer theme={theme}>
			<ResultsTitle theme={theme}>
				Les compétences dont vous avez besoin&nbsp;:
			{resultsData &&
				resultsData.map((result, index) => (
					<JobTitle key={`result-title-${index}-${result.title}`} theme={theme} >
						{formatJobList(result.title, resultsData.length, index)}
					</JobTitle>
				))
			}
			</ResultsTitle>
			<StyledLink to="/freelances">
				<Button backgroundColor={colors.blueBackground} margin="20px 0" padding="5px 20px" color="white" hoverColor="black" $isDarkMode={theme === 'dark'} >
					Découvrez nos profils
				</Button>
			</StyledLink>
			<DescriptionWrapper>
				{resultsData &&
					resultsData.map((result, index) => (
						<JobDescription
						theme={theme}
						key={`result-detail-${index}-${result.title}`}
						>
							<JobTitle 
							theme={theme} 
							data-testid="job-title"
							>
								{result.title}
							</JobTitle>
							<p data-testid="job-description">{result.description}</p>
						</JobDescription>
					))}
			</DescriptionWrapper>
		</ResultsContainer>
	)
}

export const formatFetchParams = (answers) => {
	const answerNumbers = Object.keys(answers)

	return answerNumbers.reduce((previousParams, answerNumber, index) => {
		const isFirstParam = index === 0
		const separator = isFirstParam ? '' : '&'
		return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
	}, '')
}

export const formatJobList = (title, listLength, index) => {
    if (index === listLength - 1) {
        return title
    }
    return `${title},`
}

const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0px 90px;
	padding: 30px;
	background-color: ${({ theme }) =>
		theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
	color: ${({ theme }) => (theme === 'light' ? colors.blueBackground : '#ffffff')};
	font-weight: bold;
	font-size: 28px;
	max-width: 60%;
	text-align: center;
	& > span {
		padding-left: 10px;
	}
`

const DescriptionWrapper = styled.div`
	padding: 60px;
`

const JobTitle = styled.span`
	color: ${colors.blueBackground};
	text-transform: capitalize;
`

const JobDescription = styled.div`
	font-size: 18px;
	& > p {
		color: ${({ theme }) =>
			theme === 'light' ? colors.secondary : '#ffffff'};
		margin-block-start: 5px;
	}
	& > span {
		font-size: 20px;
	}
`

const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
`
