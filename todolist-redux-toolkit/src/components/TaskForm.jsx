import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../utils/redux'

export default function TaskForm() {
	const dispatch = useDispatch()
	const [text, setText] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()

		dispatch(addTask(text))

		setText('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Ajouter une tâche"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
		</form>
	)
}
