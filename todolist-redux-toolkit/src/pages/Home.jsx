import TaskForm from '../components/TaskForm'
import TasksHeader from '../components/TasksHeader'
import TasksList from '../components/TasksList'

export default function Home() {

	return (
		<div className="container">
			<article>
				<TasksHeader />
				<TasksList />
				<footer>
					<TaskForm />
				</footer>
			</article>
		</div>
	)
}
