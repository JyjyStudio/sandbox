import styled from "styled-components"
import colors from "../utils/colors"

const Button = styled.button`
	color: ${props => props.color};
	background: ${props => props.backgroundColor};
	border-radius: 29px;
	padding: ${props => props.padding};
	margin: ${props => props.margin};
	border: none;
	cursor: pointer;
	font-size: 17px;
	&:hover {
		color: ${colors.primary};
		border: ${props => props.blueHover && `1px ${colors.blueBackground} solid`}
	}
`

export default Button