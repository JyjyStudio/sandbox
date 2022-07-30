import colors from "../utils/colors"
import styled from "styled-components"

const RectangleContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: ${props => props.flexDirection};
	justify-content: ${props => props.justifyContent};
	align-items: center;
	background-color: ${colors.backgroundLight};
	width: 95%;
    margin: 0 auto;
`
export default RectangleContainer