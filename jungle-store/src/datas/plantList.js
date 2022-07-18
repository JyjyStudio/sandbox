import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import yucca from '../assets/yucca.webp'
import olivier from '../assets/olivier.jpg'
import cactus from '../assets/cactus.jpg'
import basil from '../assets/basil.jpg'
import aloe from '../assets/aloe.webp'
import succulente from '../assets/succulent.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        price: 49,
		isBestSale: true,
		isSpecialOffer : true,
		water : 1,
		light : 2,
		cover: monstera
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        price: 123,
		water : 2,
		light : 2,
		cover: lyrata
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        price: 42,
		water : 3,
		light : 1,
		isSpecialOffer : true,
		cover: pothos
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
        price: 169,
		water : 2,
		light : 3,
		cover: yucca
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        price: 119,
		water : 1,
		light : 2,
		isSpecialOffer : true,
		cover: olivier
	},
	{
		name: 'cactus',
		category: 'extérieur',
		id: '6uo',
        price: 59,
		water : 1,
		light : 3,
		cover: cactus
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        price: 5,
		water : 3,
		light : 1,
		cover: basil
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
        price: 29,
		water : 3,
		light : 3,
		isBestSale: true,
		cover: aloe
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        price: 17,
		water : 1,
		light : 1,
		isBestSale: true,
		isSpecialOffer : true,
		cover: succulente
	}
]