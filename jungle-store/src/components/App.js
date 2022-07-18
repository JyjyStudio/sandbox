import React, { useState } from "react"
import Banner from "./Banner"
import Categories from "./Categories"
import Cart from "./Cart"
import Card from "./Card"
import { plantList } from "../datas/plantList"
import Footer from "./Footer"

const App = () => {

	const [cart, updateCart] = useState([])

	return (
		<React.StrictMode>
			<Banner />
			<div className="container">
				<Cart cart={cart} updateCart={updateCart} />
				<div className="content">
					<Categories />
					<div className="card-wrapper">
						{plantList.map(plant => (
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
