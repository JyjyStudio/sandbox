import "../styles/Card.css"
import CareScale from "./CaresScale"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from "react"
import PropTypes from 'prop-types'
import Button from "./Button"

const Card = ({ name, cover, isSpecialOffer, isBestSale, price, water, light, cart, updateCart, setIsOpen }) => {

	// gestion de l'ajout au panier d'un produit
	const addToCart = () => {
		const currentPlantAdded = cart.find(plant => plant.name === name)
		// si la plante ajoutée est deja dans le panier on incrémente quantity
		if(currentPlantAdded) {
			const filteredCartWithoutPlant = cart.filter(plant => plant.name !== name)
			updateCart([...filteredCartWithoutPlant, {name, price, quantity: currentPlantAdded.quantity + 1}]) 
		} 
		// si elle n'est pas dans le panier on la déclare avec quantity à 1
		else updateCart( [...cart, {name, price, quantity:1} ]) 
		//on  ouvre le panier si il est fermé lors de l'ajout d'un produit 
		setIsOpen(true)
		// affichage du success message
		const formattedName = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
		toast(`${formattedName} à bien été ajouté au panier !`)

	}

	// on ajoute le panier dans le localStorage 
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	// on retourne la vue des produits
	return (
		<div className="card">
			{isSpecialOffer && <span id="soldes">SOLDES 🌟</span>}
			<img className="pic" src={cover} alt={name} />
			<div className="card-content">
				<h4>{isBestSale ? name + " 🔥" : name}</h4>
				<span className="price">{price} €</span>
				<CareScale careType="water" scaleValue={water} />
				<CareScale careType="light" scaleValue={light} />
				<Button large margin='15px 0 0 0' cursorPointer onClick={addToCart}>
					Ajouter au panier
				</Button>
			</div>
		</div>
	)
}

Card.propTypes = {
	name : PropTypes.string.isRequired,
	cover : PropTypes.string.isRequired,
	isSpecialOffer : PropTypes.bool.isRequired,
	isBestSale : PropTypes.bool.isRequired,
	price : PropTypes.number.isRequired,
	water : PropTypes.number.isRequired,
	light : PropTypes.number.isRequired,
	cart : PropTypes.array.isRequired,
	updateCart : PropTypes.func.isRequired,
	setIsOpen : PropTypes.func.isRequired
}
Card.defaultProps = {
    name : 'Titre de la plante',
	cover : '',
	isSpecialOffer : false,
	isBestSale : false,
	price : 1000,
	water : 0,
	light : 0,
	cart : [],
}

export default Card
