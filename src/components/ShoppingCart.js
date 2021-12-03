import React from "react";
import {useState} from 'react';

function ShoppingCart({shoppingCart,updateShoppingCart}){
    
    const [isOpen, setIsOpen] = useState(true)
    const total= shoppingCart.reduce((acc,product)=>acc+product.price*product.amount,0)

    return isOpen?(
        <div className='shoppingcart'>
            
            <button className='shopping-cart-toggle-button' onClick={() => setIsOpen(false)}>fermer</button>
            <h2>Panier</h2>
            <ul>
                {shoppingCart.map(({ name, price, amount }, index) => (
                    <div>
                        {name} {price}€ x {amount}
                    </div>
                ))}
			</ul>
            <h3>Total :{total}€</h3>
            <button onClick={()=>updateShoppingCart([])}>Vider le panier</button>
        </div>
    ):(
        <div className='shopping-cart-closed'>
            <button className='shopping-cart-toggle-button' onClick={()=> setIsOpen(true)}>Ouvrir le panier</button>
        </div>
        
    )
}

export default ShoppingCart