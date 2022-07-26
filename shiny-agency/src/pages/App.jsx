import '../styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Survey from './Survey'
import NotFound from './NotFound'
import Results from './Results'
import Freelances from './Freelances'

const App = () => (
	<div className="App">
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/questionnaire/:question" element={<Survey />}></Route>
			<Route path='*' element={<NotFound />}></Route>
			<Route path='/resultats' element={<Results />}></Route>
			<Route path='/freelances' element={<Freelances />}></Route>
		</Routes>
	</div>
)

export default App
