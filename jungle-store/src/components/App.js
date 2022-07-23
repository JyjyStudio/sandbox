import React, { useState } from "react"
import Banner from "./Banner"
import Categories from "./Categories"
import Cart from "./Cart"
import Card from "./Card"
import { plantList } from "../datas/plantList"
import Footer from "./Footer"

const App = () => {

	const [cart, updateCart] = useState([])
    const [productList, setProductList] = useState(plantList)
    const [isOpen, setIsOpen] = useState(false)

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
