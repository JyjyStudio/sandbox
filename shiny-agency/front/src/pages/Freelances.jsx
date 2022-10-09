import Card from '../components/Card'
import {v4 as uuidv4} from 'uuid'
import styled from 'styled-components'
import FirstHeading from '../components/FirstHeading'
import colors from '../utils/colors'
import { Link } from 'react-router-dom'
import { Loader } from '../components/Loader'
import SecondHeading from '../components/SecondHeading'
import { useSelector, useStore } from 'react-redux'
import { selectTheme } from '../utils/redux/selectors'
import useFetch from '../utils/Hooks/useFetch'
import { useEffect } from 'react'
import { fetchOrUpdateFreelances } from '../features/freelances'

const Freelances = () => {

	const store = useStore()
	const theme = useSelector(selectTheme)

	// on utilise useEffect pour lancer la requête au chargement du composant
	useEffect(() => {
    	fetchOrUpdateFreelances(store) // on exécute notre action asynchrone avec le store en paramètre
 	}, [store]) // On suit la recommandation d'ESLint de passer le store en dépendances car il est utilisé dans l'effet, cela n'as pas d'impacte sur le fonctionnement car le store ne change jamais

	const { data, loading, error } = useFetch(`http://localhost:8000/freelances`)
	const freelancersList = data?.freelancersList

	if(error) {
		return  <SecondHeading $isDarkMode={theme === 'dark'} textAlign="center">Oops, une erreur est survenue, ({error.message})</SecondHeading>
	}
	else return (
		<>
			<FirstHeading  textAlign="center">Trouvez votre prestataire</FirstHeading>
			<Slogan>Chez Shiny nous réunissons les meilleurs profils pour vous.</Slogan>
			{ loading ? 
					<Loader data-testid="loader" />
				: (
					<CardsContainer display="grid" gridTemplateCol="repeat(auto-fill, 300px)" margin="100px 0" >
						{ freelancersList.map(freelance => 
							<LinkedCards to={'/freelances/' + freelance.name.split(' ').join('-')} key={uuidv4()} state={freelance}>
								<Card jobTitle={freelance.job} picture={freelance.picture} name={freelance.name} />
							</LinkedCards>
						)}
					</CardsContainer>
				) 
			}
		</>
	)
}

const LinkedCards = styled(Link)`
	text-decoration: none;
`
const CardsContainer = styled.div`
	display: ${props => props.display};
	flex-wrap: ${props => props.flexWrap};
	justify-content: ${props => props.justifyContent};
	margin: ${props => props.margin};
	grid-template-columns: ${props => props.gridTemplateCol};
	grid-gap: 20px;
	justify-content: center;
`
const Slogan = styled.p`
	text-align: center;
	color: ${colors.secondary};
    font-weight: 500;
`

export default Freelances
