import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from './Home'
import Survey from './Survey'
import NotFound from '../components/NotFound'
import Results from './Results'
import Freelances from './Freelances'
import Freelance from './Freelance'

const App = () => (
	<div className="App">
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/questionnaire/:question" element={<Survey />} />
			<Route path='*' element={<NotFound />} />
			<Route path='/resultats' element={<Results />} />
			<Route path='/freelances' element={<Freelances />} />
			<Route path='/freelances/:name' element={<Freelance />} />
		</Routes>
	</div>
)

export default App
