import { plantList } from "../datas/plantList";

const planteExterieur = plantList.filter(plant => plant.category === 'extérieur')
const planteClassique = plantList.filter(plant => plant.category === 'classique')
const planteGrasse = plantList.filter(plant => plant.category === 'plante grasse')

const switchCategory = (category) => {
	switch(category) {
	  case 'extérieur':
		return (<ul>
					{planteExterieur.map(plant =>
						<li key={plant.id}>
							{plant.isBestSale ? plant.name + ' 🔥' : plant.name }
						</li>
					)}
				</ul>
		)
	  case 'classique':
		return (<ul>
					{planteClassique.map(plant =>
						<li key={plant.id}>
							{plant.isBestSale ? plant.name + ' 🔥' : plant.name }
						</li>
					)}
				</ul>
		)
	  case 'plante grasse':
		return (<ul>
					{planteGrasse.map(plant =>
						<li key={plant.id}>
							{plant.isBestSale ? plant.name + ' 🔥' : plant.name }
						</li>
					)}
				</ul>
		)
		default : 
			console.log('erreur sur la fonction swichCategory')
	}
}
export default switchCategory