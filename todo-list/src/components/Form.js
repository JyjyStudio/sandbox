import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = (props) => {

	
	window.addEventListener('load', () => {
		const input = document.getElementById('add-input')
		input.focus();
	});
	
	const addItem = e => {
		e.preventDefault()
		const input = document.getElementById('add-input')
		input.value && props.setList( [...props.data, {txt : input.value, id: uuidv4()}] )
		setInputState('') //réinitialise l'input après validation
	}
	const [inputState, setInputState] = useState('')

	return (
		<form className="input-group mt-5 mb-4" onSubmit={e => addItem(e)}>
			<input
				type="text"
				className="form-control"
				placeholder="Chose à faire"
				aria-label="chose à faire"
				aria-describedby="basic-addon2"
				id="add-input"
				value={inputState}
				onChange={e=> {
					setInputState(e.target.value)
					}
				}
			/>
			<div className="input-group-append">
				<button 
					className="btn btn-outline-secondary" 
					style={{ borderRadius: 0}} 
					type="button"
					onClick={e => addItem(e)}
				>
					Envoyer
				</button>
			</div>
		</form>
	)

}

export default Form;
