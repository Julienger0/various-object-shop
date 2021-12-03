import React from "react";

function Product ({product,key,shoppingCart,updateShoppingCart}){

    function addToShoppingList(name,price){
        const currentProductAdded= shoppingCart.find((product)=>product.name===name)
        if (currentProductAdded){
            const shoppingCartFilteredCurrentProduct=shoppingCart.filter((product=>product.name!==name))
            updateShoppingCart([...shoppingCartFilteredCurrentProduct,{name,price,amount:currentProductAdded.amount+1}])
        }
        else{
            updateShoppingCart([...shoppingCart,{name,price,amount:1}])
        }
    }
        return(
            <li className='productsheet' >
            
            {/* <img src={`../assets/${this.props.product.id}.png`}/> */}
            <img src={product.image} alt='product' width="200" height="200"/>
            <br/>
            {product.name} 
            <br/>
            {product.price}€
            <br/>
            <button onClick={()=> addToShoppingList(product.name,product.price)}> Ajouter </button>
        </li>
        )
}
export default Product