import ReactDOM from 'react-dom/client'
import './utils/styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './utils/styles/GlobalStyle'
import Header from './components/Header'
import Home from './pages/Home'
import Survey from './pages/Survey'
import NotFound from './components/NotFound'
import Results from './pages/Results'
import Freelancers from './pages/Freelances'
import Freelance from './pages/Freelance'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { SurveyProvider } from './utils/Context/Context'
import store from './utils/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<SurveyProvider>
				<GlobalStyle />
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/questionnaire/:questionNumber"
						element={<Survey />}
					/>
					<Route path="*" element={<NotFound />} />
					<Route path="/resultats" element={<Results />} />
					<Route path="/freelances" element={<Freelancers />} />
					<Route path="/freelances/:name" element={<Freelance />} />
				</Routes>
				<Footer />
			</SurveyProvider>
		</Provider>
	</BrowserRouter>
)

