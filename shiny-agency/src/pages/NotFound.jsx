import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NotFound = () => {
	toast('Vous allez etre redirigé vers la page d\'accueil..')
	setTimeout(() => {
		window.location = '/'
	}, 5000)
  return (
	<React.StrictMode>
		<h1>Cette page n'existe pas !</h1>
		<ToastContainer position="bottom-right"/>
	</React.StrictMode>
  )
}

export default NotFound
