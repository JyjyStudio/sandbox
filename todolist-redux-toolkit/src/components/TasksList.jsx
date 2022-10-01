import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'

export default function TasksList() {
	const tasks = useSelector((state) => state.todo)

	return (
		<>
			{tasks.map((t) => (
				<TaskItem task={t} key={t.id} />
			))}
		</>
	)
}
