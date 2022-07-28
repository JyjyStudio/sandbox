import styled from "styled-components"

const Button = styled.button`
	padding: 3px;
	margin: ${props => props.margin};
	width: ${props => props.large && '100%'};
	cursor: ${props => props.cursor};
	display: ${props => props.display};
	@media screen and (max-device-width : 480px) {
		${props => props.centerMobile && 'margin: 10px auto 0'}
	}
`

export default Button