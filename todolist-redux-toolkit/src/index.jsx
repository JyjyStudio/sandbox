import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import '@picocss/pico'
import Home from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<Home />
	</StrictMode>
)
