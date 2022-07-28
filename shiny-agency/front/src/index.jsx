import ReactDOM from 'react-dom/client'
import './utils/styles/index.css'
import App from './pages/App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)