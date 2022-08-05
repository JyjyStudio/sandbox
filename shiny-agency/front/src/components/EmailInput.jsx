// import { Component } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'

const InputWrapper = styled.div`
	color: ${({ isDarkMode }) => (isDarkMode ? 'white' : colors.primary )};
	display: flex;
	flex-direction: column;
`

const StyledLabel = styled.label`
	color: ${({ isDarkMode }) => (isDarkMode ? 'white' : colors.primary )};
`

const StyledInput = styled.input`
	border: none;
	color: ${({ isDarkMode }) => (isDarkMode ? 'white' : colors.primary )};
	background-color: transparent;
	border-bottom: 2px solid ${({ isDarkMode }) => (isDarkMode ? 'white' : colors.primary )};
	margin-top: 5px;
	margin-bottom: 15px;
	outline: none;
`

const EmailInput = ({ isDarkMode }) => {
	const [inputValue, setInputValue] = useState('')
	const updateInputValue = (value) => setInputValue(value)

	return (
		<InputWrapper isDarkMode={isDarkMode}>
			<StyledLabel isDarkMode={isDarkMode}>Adresse Email</StyledLabel>
			<StyledInput
				value={inputValue}
				isDarkMode={isDarkMode}
				onChange={(e) => updateInputValue(e.target.value)}
			/>
		</InputWrapper>
	)
}

// class EmailInput extends Component {
// 	constructor(props) {
// 		// L'autre manière de binder de manière explicite votre fonction au this
// 		// this.updateInputValue =this.updateInputValue.bind(this)
// 		super(props)
// 		this.state = {
// 			inputValue: '',
// 		}
// 	}

// 	updateInputValue(value) {
// 		this.setState({ inputValue: value })
// 	}

// 	render() {
// 		const { theme } = this.props

// 		return (
// 			<InputWrapper theme={theme}>
// 				<StyledLabel theme={theme}>Adresse Email</StyledLabel>
// 				<StyledInput
// 					theme={theme}
// 					onChange={(e) => this.updateInputValue(e.target.value)}
// 				/>
// 				{this.state.inputValue}
// 			</InputWrapper>
// 		)
// 	}
// }

export default EmailInput
