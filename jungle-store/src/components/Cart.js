import '../styles/Cart.css'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types'
import Button from './Button'

const Cart = ({ cart, updateCart, isOpen, setIsOpen }) => {
    
    const totalPrice = cart.reduce((acc, curr, index) => {
        return acc = acc + (curr.price * cart[index].quantity)
    }, 0)

    const deleteElement = (item) => {
        item.quantity >=0 && item.quantity--
        const filteredItems = cart.filter(item => item.quantity > 0)
        updateCart([...filteredItems])
		const formattedName = item.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        toast(`${formattedName} à bien été retiré du panier!`)    
    }

    const emptyCart = () => {
        updateCart([])
        toast('Votre panier à bien été vidé !')
    }
     
    return (
        <div id='cart'>
            { (isOpen || cart.length) ?  
                (   <React.StrictMode>
                        <button className='open-close' onClick={() => setIsOpen(false)}>Fermer</button>
                        <h3> Panier : </h3>
                        <ul className='cart-list'>
                            { cart.map((item, index) => 
                                <li className='cart-item' key={`${item.id}-${index}`}>
                                    <span className='item'>🌻 {item.name} : {item.price}€ X{item.quantity}</span>
                                    <span className='delete-item' onClick={() => deleteElement(item)}>⛔</span>
                                </li>) 
                            }
                        </ul>
                        {cart.length ? (
                            <React.StrictMode>
                                <span className='total'>Total : { totalPrice } €</span>
                                <Button margin='20px 0 0 0' cursor='pointer' display='block' onClick={() => emptyCart()}>Vider le panier</Button>
                            </React.StrictMode>
                        ) 
                        : <span className='empty-cart-msg'>Votre panier est vide</span>}
                        
                    </React.StrictMode>
                ) : (
                    <React.StrictMode>
                        <button className='open-close' onClick={() => setIsOpen(true)}>Montrer</button>
                        <h3> Panier : </h3>
                    </React.StrictMode>                  
                )
            }
            <ToastContainer />
        </div> 
    )
}

Cart.propTypes = {
	cart : PropTypes.array.isRequired,
	updateCart : PropTypes.func.isRequired,
	isOpen : PropTypes.bool.isRequired,
	setIsOpen : PropTypes.func.isRequired,
}

export default Cart
