import "../styles/Card.css"
import CareScale from "./CaresScale"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ name, cover, isSpecialOffer, isBestSale, price, water, light, cart, updateCart, setIsOpen }) => {


	const addToCart = () => {
		const currentPlantAdded = cart.find(plant => plant.name === name)
		if(currentPlantAdded) {
			const filteredCartWithoutPlant = cart.filter(plant => plant.name !== name)
			updateCart([...filteredCartWithoutPlant, {name, price, quantity: currentPlantAdded.quantity + 1}]) 
		} 
		else updateCart( [...cart, {name, price, quantity:1} ]) 
		// ouvre le panier si il est fermé lors de l'ajout d'un produit 
		setIsOpen(true)
		// success message
		const formattedName = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
		toast(`${formattedName} à bien été ajouté au panier !`)
	}

	return (
		<div className="card">
			{isSpecialOffer && <span id="soldes">SOLDES 🌟</span>}
			<img className="pic" src={cover} alt={name} />
			<div className="card-content">
				<h4>{isBestSale ? name + " 🔥" : name}</h4>
				<span className="price">{price} €</span>
				<CareScale careType="water" scaleValue={water} />
				<CareScale careType="light" scaleValue={light} />
				<button
					className="add-cart-btn"
					onClick={addToCart}
				>
					Ajouter au panier
				</button>
			</div>
		</div>
	)
}
export default Card
