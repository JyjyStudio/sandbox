import styled from "styled-components"

const FirstHeading = styled.h1`
	width: ${props => props.width};
	font-size: ${props => props.fontSize};
	text-align: ${props => props.textAlign};
	margin: ${props => props.margin};
`

export default FirstHeading