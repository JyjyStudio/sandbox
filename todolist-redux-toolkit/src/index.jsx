import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import '@picocss/pico'
import { store } from './utils/redux'
import Home from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<Provider store={store}>
			<Home />
		</Provider>
	</StrictMode>
)
