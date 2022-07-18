import "../styles/Card.css"
import CareScale from "./CaresScale"

const Card = ({ name, cover, isSpecialOffer, isBestSale, price, water, light, cart, updateCart }) => {

	const addTocard = () => {
		const currentPlantAdded = cart.find(plant => plant.name === name)
		if(currentPlantAdded) {
			const filteredCartWithoutPlant = cart.filter(plant => plant.name !== name)
			updateCart([...filteredCartWithoutPlant, {name, price, quantity: currentPlantAdded.quantity + 1}]) 
		} 
		else updateCart( [...cart, {name, price, quantity:1} ]) 

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
					onClick={addTocard}
				>
					Ajouter au panier
				</button>
			</div>
		</div>
	)
}
export default Card
