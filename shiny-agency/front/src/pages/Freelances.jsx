import React from 'react'
import Card from '../components/Card'
import freelances from '../data/freelances'
import {v4 as uuidv4} from 'uuid'
import styled from 'styled-components'
import FirstHeading from '../components/FirstHeading'
import colors from '../utils/colors'
import { Link } from 'react-router-dom'

const Freelances = () => {
  	return (
		<React.StrictMode>
			<FirstHeading textAlign="center">Trouvez votre prestataire</FirstHeading>
			<Slogan>Chez Shiny nous réunissons les meilleurs profils pour vous.</Slogan>
			<CardsContainer display="grid" gridTemplateCol="repeat(auto-fill, 300px)" margin="100px 0 0 0">
				{ freelances.map(freelance => 
					<LinkedCards to={'/freelances/' + freelance.name.split(' ').join('-')} key={uuidv4()}>
						<Card jobTitle={freelance.jobTitle} picture={freelance.picture} name={freelance.name} />
					</LinkedCards>
				)}
			</CardsContainer>
		</React.StrictMode>
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
