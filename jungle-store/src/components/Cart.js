import '../styles/Cart.css'
import {useState} from 'react'
import React from 'react'

const Cart = ({cart, updateCart}) => {
    
    const totalPrice = cart.reduce((acc, curr, index) => {
        return acc = acc + (curr.price * cart[index].quantity)
    }, 0)

    const deleteElement = (item) => {
        item.quantity >=0 && item.quantity--
        const filteredItems = cart.filter(item => item.quantity > 0)
        updateCart([...filteredItems])
    }

    const [isOpen, setIsOpen] = useState(false)
     
    return (
        <div id='cart'>
            { isOpen ?  
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
                                <button className='empty-cart' onClick={() => updateCart([])}>Vider le panier</button>
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
        </div> 
    )
}

export default Cart
