import '../styles/Categories.css'
import React from 'react'
import { plantList } from '../datas/plantList'
import PropTypes from 'prop-types'

const Categories = ({ productList, setProductList }) => {
	const categoriesList = plantList.reduce((acc, curr) => {
		if (!acc.includes(curr.category)) acc.push(curr.category)
		return acc
	}, [])

	const checkCategory = () => {
		const selectInput = document.getElementById('categories')
		const filteredProducts = [...plantList].filter((product) =>
			categoriesList.includes(selectInput.value)
				? selectInput.value === product.category
				: productList
		)
		setProductList(filteredProducts)
	}

	const resetCategory = () => {
		setProductList(plantList)
		document.getElementById('categories').value = 'Selectionner une catégorie 🌻'
	}

	return (
		<React.StrictMode>
			<label htmlFor="categories">Catégories</label>
			<select id="categories" onChange={() => checkCategory()}>
				<option key="placeholder">Selectionner une catégorie 🌻</option>
				{categoriesList.map((categorie, id) => (
					<option key={id} value={categorie}>
						{categorie}
					</option>
				))}
			</select>
			<button className="reset-category-btn" onClick={resetCategory}>
				Réinitialiser
			</button>
		</React.StrictMode>
	)
}

Categories.propTypes = {
	productList : PropTypes.array,
	setProductList : PropTypes.func
}

export default Categories
