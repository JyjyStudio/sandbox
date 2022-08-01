import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import {v4 as uuidv4} from 'uuid'
import styled from 'styled-components'
import FirstHeading from '../components/FirstHeading'
import colors from '../utils/colors'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Freelances = () => {

	const [freelancers, setFreelancers] = useState([])

	useEffect( () => {
		axios.get('http://localhost:8000/freelances')
		.then(res => {
			const freelancersList = res.data
			setFreelancers(freelancersList['freelancersList'])
		})
	}, [])
	console.log(freelancers);
	return (
		<React.StrictMode>
			<FirstHeading textAlign="center">Trouvez votre prestataire</FirstHeading>
			<Slogan>Chez Shiny nous réunissons les meilleurs profils pour vous.</Slogan>
			<CardsContainer display="grid" gridTemplateCol="repeat(auto-fill, 300px)" margin="100px 0" >
				{ freelancers.map(freelance => 
					<LinkedCards to={'/freelances/' + freelance.name.split(' ').join('-')} key={uuidv4()} state={freelance}>
						<Card jobTitle={freelance.job} picture={freelance.picture} name={freelance.name} />
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
