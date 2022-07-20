import '../styles/List.css'
import React, { useState } from "react"
import { plantList } from "../datas/plantList"


const Categories = () => {

    const [productList, setProductList] = useState(plantList)

    const categoriesList = plantList.reduce((acc, curr) => {
        if(!acc.includes(curr.category)) acc.push(curr.category)
        return acc
    }, [])

    const checkCategory = () => {
        const selectInput = document.getElementById('categories')
        const goodCategory = [...productList].filter(product => product.category === selectInput.value)
        setProductList(goodCategory)
        console.log({productList});
        console.log(selectInput.value);
    }

    return (
        <React.StrictMode>
            <label htmlFor="categories">Catégories</label>
            <select id="categories" onChange={() => checkCategory()}>
                <option key='placeholder'>Selectionner une catégorie 🌻</option>
                { 
                    categoriesList.map((categorie, id) => (
                        <option key={id} value={categorie}>{categorie}</option>
                    ))
                }
            </select>
        </React.StrictMode>
    )
}

export default Categories