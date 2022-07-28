import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import Img from "./Img"
import LogoSrc from '../assets/dark-logo.png'
import { Link } from "react-router-dom"

const Header = () => {
  return (
	<HeaderContainer>
		<Link to="/">
			<Img src={LogoSrc} width="190px" height="70px" margin="30px" alt="logo"/>
		</Link>
		<Navbar />
	</HeaderContainer>
  )
}

const HeaderContainer = styled.header`
	display:flex;
	align-item: center;
	justify-content: space-between;
	font-size: calc(10px + 2vmin);
`

export default Header