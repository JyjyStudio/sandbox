import styled, { keyframes } from "styled-components"
import colors from "../utils/colors"

const rotate  = keyframes`
	from {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(360deg)
	}
`
export const Loader = styled.div`
	border: 3px ${colors.blueBackground} solid;
	border-bottom-color: transparent;
	animation: ${rotate} 1s infinite linear;
	padding: 15px; 
	width: 0;
	height: 0;
	border-radius: 50%;
	margin: 0 auto;
`