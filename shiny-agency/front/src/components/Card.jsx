import DefaultPicture from '../assets/freelance-picture.svg'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../utils/colors'

const Card = ({ name, jobTitle, picture }) => {
	return (
		<CardContainer>
			<JobTitle style={{color: colors.blueBackground}}>{jobTitle}</JobTitle>
			<CardImg src={picture} alt="freelance" />
			<Name>{name}</Name>
		</CardContainer>
  	)
}

Card.propTypes = {
	name : PropTypes.string.isRequired,
	jobTitle : PropTypes.string.isRequired,
	picture : PropTypes.string.isRequired,
}
Card.defaultProps = {
    title: 'Mon titre par défaut',
	jobTitle : 'Mon poste par défaut',
	picture : DefaultPicture,
}
const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 200px;
	height: 200px;
	border-radius: 30px;
	padding: 25px;
	cursor: pointer;
	background-color: ${colors.backgroundLight};
	box-shadow: 0 0 5px ${colors.secondary};
	&:hover {
		box-shadow: 0 0 5px ${colors.primary};
	}
	
`
const JobTitle = styled.span`
	color: ${colors.blueBackground};
	align-self: start;
`
const Name = styled.span`
	color: black;
`
const CardImg = styled.img`
	height: 100px;
	width: 100px;
`

export default Card
