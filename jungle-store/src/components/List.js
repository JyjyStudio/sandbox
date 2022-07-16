import '../styles/List.css';
import React from "react";
import { plantList } from "../datas/plantList";

const categories = plantList.reduce((acc, curr) => {
    if(!acc.includes(curr.category)) acc.push(curr.category)
    return acc
}, []);

const List = () => (
    <React.StrictMode>
        <label htmlFor="categories">Catégories</label>
        <select id="categories">
            <option key='placeholder'>Selectionner une catégorie 🌻</option>
            { 
                categories.map((categorie, id) => (
                    <option key={id}>{categorie}</option>
                ))
            }
        </select>
    </React.StrictMode>
)

export default List
export {categories}
