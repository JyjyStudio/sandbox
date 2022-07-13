// Variables
const Flowers = [ {price:8, name:'Montsera'}, {price:10,name:'Lierre'}, {price:15,name:'Bouquet de fleurs'} ]
const totalPrice = Flowers.reduce((acc,curr) => {
    return acc += curr.price
}, 0)

// Component
const Cart = () => (
    <div id='cart'>
        <h3> Panier : </h3>
        <ul>
            {Flowers.map(flower =>(<li key={flower.name}>{flower.name} : {flower.price} €</li>))}
        </ul>
        Total : { totalPrice } €
    </div> 
)

export default Cart