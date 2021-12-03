import React from "react";
import initialData from "../datas/initialData";
import Product from "./Product";



function ProductList ({shoppingCart,updateShoppingCart}){

    return(
        <ul className='productlist'>
            {initialData.map((product)=><Product product={product} key={product.id} shoppingCart={shoppingCart} updateShoppingCart={updateShoppingCart}/>)}
        </ul>
    )
    

}

export default ProductList