import '../styles/Cart.css'
import { plantList } from '../datas/plantList'

const totalPrice = plantList.reduce((acc,curr) => {
    return acc += curr.price
}, 0)

// Component
const Cart = () => (
    <div id='cart'>
        <h3> Panier : </h3>
        <ul>
            { plantList.map(plant => <li key={plant.id}>{plant.name} : {plant.price} €</li>) }
        </ul>
        <span className='total'>Total : { totalPrice } €</span>
    </div> 
)

export default Cart