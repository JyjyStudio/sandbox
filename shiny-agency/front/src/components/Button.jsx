import styled from "styled-components"
import colors from "../utils/colors"

const Button = styled.button`
	color: ${props => props.color};
	background: ${props => props.backgroundColor};
	border-radius: ${props => props.borderRadius ? props.borderRadius : "29px"};
	padding: ${props => props.padding};
	margin: ${props => props.margin};
	border: ${props => props.border ? props.border : "none"};
	cursor: pointer;
	font-size: 17px;
	&:hover {
		color: ${props => props.hoverColor || "black"};
		border: ${props => props.blueHover && `2px ${colors.blueBackground} solid`};
		background-color: ${props => props.hoverBackground};
		text-decoration: ${( {textDecoration} ) => textDecoration};
	}
`

export default Button