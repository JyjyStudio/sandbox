import styled from 'styled-components'

const Img = styled.img`
	width: ${props => props.width};
	height: ${props => props.height};
	margin: ${props => props.margin};
	border-radius: ${props => props.borderRadius}
`
export default Img