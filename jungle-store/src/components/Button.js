import styled from "styled-components"

const Button = styled.button`
	padding: 3px;
	margin-left: ${props => props.ml10 && '10px'};
	margin-top: ${props => props.mt15 && '15px'};
	margin-top: ${props => props.mt20 && '20px'};
	width: ${props => props.large && '100%'};
	cursor: ${props => props.cursorPointer && 'pointer'};
	@media screen and (max-device-width : 480px) {
		${props => props.centerMobile ? 'margin: 10px auto 0' : '0'
	}
`

export default Button