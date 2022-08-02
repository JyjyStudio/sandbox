import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from './Home'
import Survey from './Survey'
import NotFound from '../components/NotFound'
import Results from './Results'
import Freelances from './Freelances'
import Freelance from './Freelance'
import Footer from '../components/Footer'
import ThemeProvider from '../utils/Context/Context'
import GlobalStyle from '../utils/styles/GlobalStyle'


const App = () => (
	<div className="App">
		<ThemeProvider>
			<GlobalStyle/>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/questionnaire/:questionNumber" element={<Survey />} />
				<Route path='*' element={<NotFound />} />
				<Route path='/resultats' element={<Results />} />
				<Route path='/freelances' element={<Freelances />} />
				<Route path='/freelances/:name' element={<Freelance />} />
			</Routes>
			<Footer/>
		</ThemeProvider>
	</div>
)

export default App
