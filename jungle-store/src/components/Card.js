import '../styles/Card.css'
import {plantList} from '../datas/plantList'
import CareScale from './CaresScale'

const CardItems = () => (
	<div className='cards'>
	{
		plantList.map(plant => (
			<div className="card" key={plant.name}>
				<div className='pic'></div>
				<h4>{plant.isBestSale ? plant.name + ' 🔥' : plant.name }</h4>
				<span id='soldes'>{plant.isSpecialOffer && 'SOLDES 🌟'}</span>
				<span className='price'>{plant.price} €</span>
				<CareScale careType='water' scaleValue={plant.water} />
				<CareScale careType='light' scaleValue={plant.light} />
			</div>
		))
	}
	</div>
)

export default CardItems