import { Link } from "react-router-dom"

const Navbar = () => (
	<nav className='App-header'>
		<Link to="/">Accueil</Link>
		<Link to="/questionnaire/1">Questionnaire</Link>
		<Link to="/freelances">Freelances</Link>
	</nav>
)

export default Navbar