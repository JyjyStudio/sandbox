import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RectangleContainer from './RectangleContainer'
import NotFoundImg from '../assets/404.svg'
import styled from 'styled-components'

const NotFound = () => {
	toast('Vous allez etre redirigé vers la page d\'accueil..')
	setTimeout(() => {
		window.location = '/'
	}, 5000)
  return (
	<RectangleContainer flexDirection="column">
		<P>Oups...</P>
		<img src={NotFoundImg} alt="not-found" width={'50%'}/>
		<ToastContainer position="bottom-right"/>
		<P>Il semblerait qu'il y ait un problème</P>
	</RectangleContainer>
  )
}

const P = styled.p`
	text-align: center;
	font-weight: bold; 
	font-size: 25px;
`

export default NotFound
