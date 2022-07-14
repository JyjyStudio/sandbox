import React from "react"
import logo from '../assets/leaf.png'

const headerText = 'La maison jungle'.toUpperCase()
const descriptionText = 'Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍'

const Header = () => (
    <header>
        <img src={logo} alt='logo' height={100}/>
        <div>
            <h1 className="header1"> {headerText} </h1>
            <h2 className="header2"> {descriptionText} </h2>
        </div>
    </header>
)

export default Header