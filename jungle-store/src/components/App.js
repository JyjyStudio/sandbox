import React, { useState } from "react"
import Banner from "./Banner"
import Categories from "./Categories"
import Cart from "./Cart"
import Card from "./Card"
import { plantList } from "../datas/plantList"
import Footer from "./Footer"

const App = () => {

	// recupération du state du panier depuis le localstorage
	const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []
	// sauvegarde du panier dans le state
	const [cart, updateCart] = useState(cartFromLocalStorage)
	// gestion du select des categories
	const [productList, setProductList] = useState(plantList)
	// gestion du panier (ouvert/fermé)
	const [isOpen, setIsOpen] = useState(true)

	return (
		<React.StrictMode>
			<Banner />
			<div className="container">
				<Cart cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} />
				<div className="content">
					<Categories productList={productList} setProductList={setProductList} />
					<div className="card-wrapper">
						{productList.map(plant => (
							<Card
								key={plant.id}
								name={plant.name}
								categorie={plant.category}
								price={plant.price}
								isBestSale={plant.isBestSale}
								isSpecialOffer={plant.isSpecialOffer}
								water={plant.water}
								light={plant.light}
								cover={plant.cover}
								updateCart={updateCart}
								cart={cart}
								setIsOpen={setIsOpen}
							/>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</React.StrictMode>
	)
}

export default App
