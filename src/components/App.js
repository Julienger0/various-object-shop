import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import Footer from "./Footer";
import {useState} from 'react';




function App (){
    const [shoppingCart, updateShoppingCart] = useState([])
        return(
            <div id='root'>
                <Header/>
                <div className='content'>
                    <ShoppingCart shoppingCart={shoppingCart} updateShoppingCart={updateShoppingCart}/>
                    <ProductList shoppingCart={shoppingCart} updateShoppingCart={updateShoppingCart}/>

                </div>
                <Footer/>
            </div>
            
        )
    }


export default App